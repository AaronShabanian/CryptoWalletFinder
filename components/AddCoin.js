import React, { useEffect, useState } from "react";
export default function AddCoin({handleSubmit}){
  const[addy, setAddy] = useState("");
  const[type, setType] = useState("");
  let submitForm = e=> {
    e.preventDefault()
    handleSubmit(addy, type)
    setAddy("")
    setType("")
  }
  return( 
    <div>
    <form className="card" onSubmit={submitForm}>
      <div className="p-2">
      <label>Chose type of Crypto:</label>
      <input type="text" list="coins" value={type} onChange={e =>setType(e.target.value)}/>
        <datalist id="coins" name="coins">
          <option value="BTC">Bitcoin</option>
          <option value="ETH">Etherium</option>
          <option value="DOGE">Dogecoin</option>
          <option value="BNB">Binance Coin</option>
          <option value="SOL">Solana</option>
          <option value="XRP">XRP</option>

        </datalist>

      </div>
      <div>
      <label className="p-2"> Address: 
        <input type= "text" value={addy} onChange={e =>setAddy(e.target.value)}/>
      </label>
      <button type="submit" className="bg-pink-300 rounded px-12 py-2 hover:bg-yellow"> Save </button>
      </div>
    </form>
    
     <style jsx>{`
     .card{
       display: flex;
       flex-directiion: column;
       justify-content: space-around; 
       background-color: white; 
       padding: 1.5rem; 
       max-width:100%;
       border-radius:100px; 
       position:static; 
       right:0px;
       left:0px; 
       bottom:1rem;
       text-align:center;
       
     }
     `}
     </style>
  </div>
  )
}
