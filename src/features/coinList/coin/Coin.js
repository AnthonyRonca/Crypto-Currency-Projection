import React from "react";
import './Coin.css'

// Passed into Coin Component from API
const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => (
  <div className="coin-container">
    <div className="coin-row">
      <div className="coin">
        <img src={image} alt="crypto-coin-image" />
        <p className="coin-symbol">{symbol}</p>
      </div>
      {/* coin information */}
      <div className="coin-data">
        <p className="coin-price">${price}</p>
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}
        <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
      </div>
    </div>
  </div>
);

export default Coin;
