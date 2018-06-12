import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const Coin = props => (
  <div>
    {props.coin.symbol} {props.coin.name} {props.coin.currencyType}
  </div>
)

export default Coin;
