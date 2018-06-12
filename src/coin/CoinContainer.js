import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import CoinDetail from './CoinDetail';

const query = gql`
  query {
    coin(id: 1) {
      currency_type
      name
      symbol
    }
  }`
;
class CoinContainer extends Component {
  constructor(props) {
    super(props);

    const initialState = {
      symbol: 'BTC',
      name: 'Bitcoin',
      currencyType: 'crypto',
    };

    this.state = { ...initialState };
  }

  render() {
    if (!this.props.data || !this.props.data.coin) {
      return (<div></div>);
    }

    return (
      <div>
        <CoinDetail
          coin={this.props.data.coin}
        />
      </div>
    )
  }
};

export default withRouter(graphql(query)(CoinContainer));
