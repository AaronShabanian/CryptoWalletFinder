import React, { useEffect, useState } from "react";
import Link from 'next/link';
export default function Name({handleSubmit}){
    const[username, setUsername] = useState("");
    let submitForm = e=> {
        e.preventDefault();
        handleSubmit(username);
        setUsername("")
    }
    return(
        <div className="bg-white min-h-screen min-w-screen">
        <form className="card" onSubmit={submitForm}>
            <label className="p-2"> <h1 className="text-black text-6xl font-black py-10"> Enter Display Name: </h1>
                <input className= "border py-2 px-3 text-grey-darkest" type= "text" value={username} onChange={e =>setUsername(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <button type="submit" className="bg-pink-300 rounded px-12 py-2"> Save </button>
        </form>
        <style jsx>{`
        .card{
            display: flex
            flex-directiion: column;
            background-color: white; 
            padding: 10rem;
            border-radius:25px;
            width:100vw;
            height:100vh;
            text-align:center;

        }
        `} </style>
        </div>
       
    )
}