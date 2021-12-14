import React, { useEffect, useState } from "react";
export default function CoinCard({type, address, authorized}) {
    return(
        <div>
        <div className="card">
            <div>
            {type=="BTC" &&(
                <img className="logo" src="/images/btc.png" alt="BTC"></img> 
            )
            }
             {type=="ETH" &&(
                <img className="logo" src="/images/eth.png" alt="ETH"></img> 
            )
            }
            {type=="DOGE" &&(
                <img className="logo" src="/images/doge.png" alt="DOGE"></img> 
            )
            }
            {type=="XRP" &&(
                <img className="logo" src="/images/xrp.png" alt="XRP"></img> 
            )
            }
            {type=="BNB" &&(
                <img className="logo" src="/images/bnb.png" alt="BNB"></img> 
            )
            }
            {type=="SOL" &&(
                <img className="logo" src="/images/sol.png" alt="SOL"></img> 
            )
            }
            <h1 className="name"> {type}
            </h1>
            </div>
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
        .logo{
            width: 10%;
            text-align: center;
        }
        `} </style>
        </div>
    )
}