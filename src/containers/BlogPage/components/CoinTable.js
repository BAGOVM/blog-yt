import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Coin from './Coin';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);


    useEffect(async () => {
        await axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
            )
            .then(res => setCoins(res.data))
            .catch(error => console.log(error));
    }, []);

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase())


    return (
        filteredCoins.map(coin =>
            <Coin

                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
            />
        ))}

export default CoinsTable;