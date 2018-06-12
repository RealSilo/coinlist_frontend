import React from 'react';

const Coin = props => (
  <div>
    {props.coin.symbol} {props.coin.name} {props.coin.currencyType}
  </div>
);

export default Coin;
