import React from 'react';
import { Link } from 'react-router-dom';

const Comment = props => (
  <div>
    {props.comment.user.email} {props.comment.body}
  </div>
)

export default Comment;
