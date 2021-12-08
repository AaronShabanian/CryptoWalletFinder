import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";
export default function CoinStore({store}) {
    let rows = [];
    for(var i = 0; i < store.length; i++){
        rows.push(<CoinCard type={store.slice(-(i+1))[0].cointype} address={store.slice(-(i+1))[0].address}/>)
    }
    return (
        <div>
            {rows}
        </div>
    )
}