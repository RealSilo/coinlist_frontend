import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Coin from './Coin';

const CoinList = props => {
  const coinList = props.coins.map((coin) => (
    <div>
      <Coin
        key={coin.id}
        coin={coin}
      />
    </div>
  ));

  return (
    <div>
      {coinList}
    </div>
  )
}

export default CoinList;
