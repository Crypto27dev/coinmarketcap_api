import React from 'react';
import './App.css';
import CoinTalbe from './components/coinTable';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to coding challenge</h1>
      </header>
      <div className="app-body">
        <p className="api_link">API: https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?sort=cmc_rank</p>
        <CoinTalbe />
      </div>
      <footer>
        <h3>Vladimir Novicic</h3>
      </footer>
    </div>
  );
}

export default App;
