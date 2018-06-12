import React from 'react';
import { Link } from 'react-router-dom';

const Comment = props => (
  <div>
    {props.comment.symbol} {props.comment.name} {props.comment.currencyType}
  </div>
)

export default Comment;
