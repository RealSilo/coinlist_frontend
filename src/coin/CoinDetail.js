import React from 'react';

import Coin from './Coin';
import CommentList from '../comments/CommentList';

const CoinDetail = props => (
  <div>
    <Coin coin={props.coin} />
    <CommentList commentableId={props.coin.id} commentableType='Comment' />
  </div>
)

export default CoinDetail;
