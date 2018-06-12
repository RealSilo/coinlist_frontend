import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import CoinList from './CoinList';

const query = gql`
  query {
    coins {
      currency_type
      name
      symbol
    }
  }`
;
class CoinListContainer extends Component {
  constructor(props) {
    super(props);

    const initialState = {
      coins: [
        { symbol: 'BTC', name: 'Bitcoin', currencyType: 'crypto' },
        { symbol: 'ETH', name: 'Ethereum', currencyType: 'crypto' },
        { symbol: 'USD', name: 'US Dollar', currencyType: 'currency' }
      ],
    };

    this.state = { ...initialState };
  }

  render() {
    if (!this.props.data || !this.props.data.coins) {
      return (<div></div>);
    }

    console.log(this.props.data.coins);

    return (
      <div>
        <CoinList
          coins={this.props.data.coins}
        />
      </div>
    )
  }
};

export default withRouter(graphql(query)(CoinListContainer));
