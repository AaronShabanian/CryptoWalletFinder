import { Auth } from '@supabase/ui'
import Head from 'next/head'
import Link from 'next/link'
import { supabase } from '../utils/supabaseClient';
import CoinStore from '../components/CoinStore';
import React, { useEffect, useState } from "react";
export default function Home() {
  const [dataType, setDataType] = useState([])
  const [query, setQuery] = useState([])
  const { user } = Auth.useUser()

  let submitForm = e=> {
    e.preventDefault()
    retreiveCards(query)
    //handleSubmit(addy, type)
    //setAddy("")
    //setType("")
  }
  const retreiveCards = async (username) =>{
    const { data, error } = await supabase
    .from('coins')
    .select('cointype, address')
    .eq('user', username);
    setDataType(data);
  }
  return (
    <div className="container">
      <Head>
        <title>Crypto Wallet Findrr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="login"> 
        <Link href="create-profile">
          <img className="profile" src="/images/profile.jpg" alt="My Profile"></img> 
          </Link>
        </div>
        <main>
          <div className="info">
          <h1 className="title">
            Crypto Findrr
          </h1>

          <p className="description">
          <form onSubmit={submitForm}>
            <input classname="querySearch" type="text" placeholder="Enter Name" onChange={e =>setQuery(e.target.value)} />
            <button type="submit" className="searching"><p className="arrow">→</p></button>
          </form>
          </p>
          <CoinStore store = {dataType}/>
          </div>
        </main>

      </body>
      <style jsx>{`
        
        * {background-color: #121212}
       
        .arrow{
          background-color: #7FFF00;
          font-size: 3em;
        }
        .login{
          position:absolute;
          top:0;
          right:0;
        }
        .searching{
          background-color:	#7FFF00;
          padding-top:5px;
          padding-bottom:30px;
          line-height: 1em;
     
        }
        .profile{
          width:7rem;
        }
        input[type=text]{
          border: 2px solid white;
          border-radius: 4px;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .info {
          width: 500px;
          height: 100px;
    
          position: absolute;
          top:0;
          bottom: 0;
          left: 0;
          right: 0;
    
    margin: auto;
        }
        h1{
          color:white;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color:white;
        }
        
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
         
          text-decoration: none;
        }

        .title a {
         
          text-decoration: none;
        }

  

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }


        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
