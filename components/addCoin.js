import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
export default function addCoin(){
  return( 
    <div>
    <form>
      <label>Chose type of Crypto:
        <select id="coins" name="coins">
          <option value="btc">Bitcoin</option>
          <option value="eth">Etherium</option>
          <option value="doge">Dogecoin</option>
          <option value="sol">Solana</option>
        </select>
      </label>
      <label> Address: 
        <input type= "text" />
      </label>
    </form>
    dog dog
    </div>
  
  )
}