import React from 'react';
import { Link } from 'react-router-dom';

const Coin = props => (
  <div>
    <Link to={`coins/${props.coin.id}`}>
      {props.coin.symbol} {props.coin.name} {props.coin.currencyType}
    </Link>
  </div>
)

export default Coin;
