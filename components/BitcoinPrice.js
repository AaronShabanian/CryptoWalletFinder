// Taken from https://w3collective.com/react-component-bitcoin-price/ 
import React, { useEffect, useState } from "react";
export default function BitcoinPrice() {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const logo="/images/btc.png";
    useEffect(() => {
      fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((data) => {        
          setPrice(data.USD.last); 
          setLoading(false);       
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
        <div>
      <div className="btc">
        <img className="btc-logo" src={logo} alt="Bitcoin" />
        <span className="btc-price">
          {loading ? "LOADING" : "$" + price}
        </span>      
      </div>
      <style jsx>{`
      .btc {
        background-color: #121212;    
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
      }
      .btc-logo {
        height: 25px;
        margin-right: 5px;
      }
      .btc-price {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        font-family: sans-serif;
      }
      `} </style>
      </div>
    );
  };