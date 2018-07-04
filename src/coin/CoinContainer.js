import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql, connect } from 'react-apollo';

import Coin from './Coin';
import CommentList from '../commentList/CommentList';
import CreateCommentContainer from '../createComment/CreateCommentContainer';

const CoinQuery = gql`
  query CoinQuery($id: ID!) {
    coin(id: $id) {
      currency_type
      name
      symbol
      comments {
        id
        body
        user {
          email
        }
      }
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
        <Coin
          coin={this.props.data.coin}
        />
        <CommentList 
          comments={this.props.data.coin.comments}
        />
        <CreateCommentContainer
          commentableId={this.props.data.coin.id}
          commentableType='Comment'
        />
      </div>
    )
  }
};

export default withRouter(graphql(CoinQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(CoinContainer));
