import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";
export default function CoinStore({store}) {
    return (
        <div>
            {
                <CoinCard type="Btc" address="123"/>
            }
        </div>
    )
}