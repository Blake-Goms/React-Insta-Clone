import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import Header from './Header';
import './Post.css';
import heart from '../../assets/heart.png';
import chat from '../../assets/chat.png';

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
      <div className="interaction">
      <img src={heart} alt="instagram heart" className=" interaction-img" />
      <img src={chat} alt="instagram chat" className="interaction-img" />
      </div>
      <div className="spanlikes">
        <span className="likes">{props.likes} likes</span>
      </div>
      <CommentContainer comments={props.post.comments} likes={props.likes}/>
    </div>
  );
};

export default PostDisplay;