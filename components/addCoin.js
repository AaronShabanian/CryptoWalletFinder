import React, { useEffect, useState } from "react";
export default function AddCoin(){
  return( 
    <div>
    <form className="card">
      <div className="p-2">
      <label>Chose type of Crypto:</label>
        <select id="coins" name="coins">
          <option value="btc">Bitcoin</option>
          <option value="eth">Etherium</option>
          <option value="doge">Dogecoin</option>
          <option value="sol">Solana</option>
        </select>
      </div>
      <label className="p-2"> Address: 
        <input type= "text" />
      </label>
      <button type="submit" className="bg-pink-300 rounded px-12 py-2"> Save </button>
    </form>
    
     <style jsx>{`
     .card{
       display: flex;
       flex-directiion: row;
       justify-content: space-around; 
       background-color: white; 
       padding: 1.5rem; 
       max-width:50%;
       border-radius:100px; 
       position:fixed; 
       bottom:0px; 
       left:30%; 
     }
     `}
     </style>
  </div>
  )
}