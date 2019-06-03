import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import Header from './Header';

import './Post.css';

const PostDisplay = props => {
  return (
    <div className="post-border">
      <Header
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div>
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <CommentContainer comments={props.post.comments} />
    </div>
  );
};

export default PostDisplay;