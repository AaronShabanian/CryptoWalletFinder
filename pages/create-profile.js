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
      fetchCoins();
      getName();
      <CoinStore store = {dataType}/>;
    }, [data])
    return (
        
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
            {console.log("Display Name:" +displayName)}
            {displayName==null ?(
            <div>
            {console.log("Here")}
            <Name handleSubmit={submitDisplayName}/>
            </div>
            ) : (
            
          <div>
          <CoinStore store = {dataType}/>
          <AddCoin handleSubmit={submitCoin}/>
          <button
          className="text-pink-300 font-semibold bg-white p-2 rounded-lg right-2 bottom-2 fixed"
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
        </div>
    )
    }