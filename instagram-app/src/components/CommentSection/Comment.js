import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  return (
      <div className="comment-container">
      <span className="user">{props.comment.username}</span>
      <span className="comment">{props.comment.text}</span>{' '}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  })
};

export default Comment;