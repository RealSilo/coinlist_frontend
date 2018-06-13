import React from 'react';

import Comment from './Comment';

const CommentList = props => {
  if (!props.comments) {
    return <div>Loading..</div>
  }

  const commentList = props.comments.map((comment) => (
    <div>
      <Comment
        key={comment.id}
        comment={comment}
      />
    </div>
  ));

  return (
    <div>
      {commentList}
    </div>
  )
}

export default CommentList;
