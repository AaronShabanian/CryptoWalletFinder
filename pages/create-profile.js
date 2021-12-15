import Head from 'next/head'
import { Auth } from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'
import AddCoin from '../components/AddCoin'
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { data } from 'autoprefixer';
import CoinStore from '../components/CoinStore';
import Name from '../components/Name';
import Link from 'next/link';
export default function create() {
    const { user } = Auth.useUser()
    const [dataType, setDataType] = useState([])
    const [coins, setCoins] =useState(
      []
    )
    const [displayName, setDisplayName]= useState([])
    const[error, setError]=useState(null)
    const getName = async() =>{
      const {data, error} = await supabase
            .from('profiles')
            .select('display_name')
            .eq('id', user.id); 
      setDisplayName(data.slice(-(1))[0].display_name); 
    }
    /* Adding coin address to database */
    const submitCoin = async (addy, type) =>{
      const { data, error } = await supabase
      .from('coins')
      .insert([
        { id: user.id, cointype: type, address: addy, user:displayName}
        ])
      console.log(addy);
      console.log(type);
      alert("Coin address added");
    }
    const submitDisplayName = async (username) =>{
      const { data, error } = await supabase
      .from('profiles')
      .update({ display_name: username })
      .match({id: user.id});
      window.location.assign("/")
    }
    const fetchCoins =async () => {
      const {data, error} = await supabase
      .from('coins')
      .select('cointype, address')
      .eq('id', user.id);
      setDataType(data);
    }
    useEffect(()=> {
      if (user!=null)(
      fetchCoins())
      if(user!=null)(
      getName());
      
      <CoinStore store = {dataType} authorized="True"/>;
    }, [dataType], [user])
    return (
      <body class="h-screen bg-gray-900">
      <div className="bg-gray-900 min-h-screen min-w-screen">
          <div id="spacer" className="h-12"/>
              
        {/* 
                  * Check if user is logged in or not. 
                  * If not, display the login UI
                  * If logged in, display the app 
                  * & pass the user in as props
                  */
              !user ? (
          <div className="container mx-auto max-w-2xl flex flex-col justify-center items-center p-4">
            <h1 className="text-white text-6xl font-black">Crytpo Findrr</h1>
            <div id="spacer" className="h-12"/>
            <div className="bg-white rounded-lg py-4 px-12">
                      {/* This is the Login UI Component from SupabaseUI */}
            <Auth
              supabaseClient={supabase}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
            />
   
            </div>
          </div>
        ) : ( 

          <div>
            {displayName==null ?(
            <div>
            <Name handleSubmit={submitDisplayName}/>
            </div>
            ) : (
            
          <div>
            <button className="bg-white px-5 py-3 rounded-md font-bold absolute top-0 left-0">
          <Link href="/">
          Back To Home
          </Link>
          </button>
          <br/>
          <br/>
          <div className='hope'>
          <CoinStore store = {dataType} authorized="True"/>
          </div>
          <AddCoin handleSubmit={submitCoin}/>
          <button
          className="text-pink-300 font-semibold bg-white p-2 rounded-lg right-2 top-2 fixed hover:bg-yellow"
          onClick={async () => {
            const { error } = await supabase.auth.signOut()
            if (error) console.log('Error logging out:', error.message)
          }}
        >
            Logout
          </button>
          </div>
            )}
          </div>
        )
    }
      <style jsx>{`
     .hope{
       display: flex;
       flex-directiion: column;
       justify-content: space-around; 
       padding: 1.5rem; 
       max-width:100%;
       border-radius:100px; 
       align-items: center;
       text-align:center;
       
     }
     
     `}
     </style>
        </div>
        </body>
    )
    }