import React, { useEffect, useState } from "react";
export default function CoinCard({type, address}) {
    return(
        <div>
        <div className="card">
            <h1 className="name"> {type}</h1>
            <h1 className="address"> Address: {address}</h1>
            
        </div>
        <style jsx>{`
        .card{
            display: flex
            flex-directiion: column;
            background-color: white; 
            padding: 1.5rem;
            border-radius:25px;
            width:30rem;
            min-width: 25%;
            margin-bottom:1rem;
            color:black;

        }
        `} </style>
        </div>
    )
}