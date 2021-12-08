import React, { useEffect, useState } from "react";
export default function Name({handleSubmit}){
    const[username, setUsername] = useState("");
    let submitForm = e=> {
        e.preventDefault()
        handleSubmit(username)
    }
    return(
        <div>
        <form className="card" onSubmit={submitForm}>
            <label className="p-2"> Enter Display Name: 
                <input type= "text" value={username} onChange={e =>setUsername(e.target.value)}/>
            </label>
            <button type="submit" className="bg-pink-300 rounded px-12 py-2"> Save </button>
        </form>
        <style jsx>{`
        .card{
            display: flex
            flex-directiion: column;
            background-color: white; 
            padding: 1.5rem;
            border-radius:25px;
            width:100vh;
            height:100vh;

        }
        `} </style>
        </div>
       
    )
}