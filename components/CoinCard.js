import React, { useEffect, useState } from "react";
import { supabase } from '../utils/supabaseClient'
export default function CoinCard({type, address, authorized}) {
    let submitForm = e=> {
        e.preventDefault()
        delt(address)
      }
    const delt = async (addy) =>{
        console.log("test")
        const {data, error} = await supabase
            .from('coins')
            .delete()
            .match({address: addy}); 
    }
    return(
        <div>
        <div className="card">
            {authorized=="True" &&(
                <form onSubmit={submitForm}>
               <button type="submit"> <img className="delete" src="/images/trash.png" alt="Delete"></img> </button>
               </form>
            )}
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
            <h1 className="address"> Address:  </h1>{address}
        
            
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
            text-align: center;
            

        }
        .delete:hover {
            background-color:yellow
            
        }
        h1{
            font-weight:bold;
        }
        .delete{
            width:7%;
            position:relative;
          top:0;
          right:-25em;
        }
        .logo{
            width: 10%;
            position: relative;
            top:0;
            right: -12em;
        }
        `} </style>
        </div>
    )
}