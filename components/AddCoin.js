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
          <option value="btc">Bitcoin</option>
          <option value="eth">Etherium</option>
          <option value="doge">Dogecoin</option>
          <option value="sol">Solana</option>

        </datalist>
      </div>
      <label className="p-2"> Address: 
        <input type= "text" value={addy} onChange={e =>setAddy(e.target.value)}/>
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
