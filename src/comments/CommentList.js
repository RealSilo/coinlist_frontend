import React from 'react';

import Comment from './Comment';

const CommentList = props => {
  const commentList = props.comments.map((comment) => (
    <div>
      <Comment
        key={comment.id}
        comment={comment}
      />
    </div>
  ));

  if (!props.comments) {
    return <div>Loading..</div>
  }

  return (
    <div>
      {commentList}
    </div>
  )
}

export default CommentList;
