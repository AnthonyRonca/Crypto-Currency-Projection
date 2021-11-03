import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./features/Coin/Coin.js";
import { render } from "@testing-library/react";
import LineChart from "react-linechart";
import "../node_modules/react-linechart/dist/styles.css";

var apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState([]);

  const data = [
    {
      color: "steelblue",
      points: [
        { x: 1, y: 2 },
        { x: 3, y: 5 },
        { x: 7, y: -3 },
      ],
    },
  ];

  // Axios Call
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Woops! Error retrieving data.");
      });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    coin.name.toLowerCase().includes("bitcoin");
  });

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"> Search a Currency</h1>
        <form>
          <input
            type="text"
            placeholder="Bitcoin"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <div className="App">
          <h1>My First LineChart</h1>
          <LineChart width={600} height={400} data={data} />
        </div>
      </div>
      {coins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
