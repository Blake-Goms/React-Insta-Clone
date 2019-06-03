import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments
      };
    }
    render() {
      return (
        <div>
          <div>
              {this.state.comments.map((p, id) => (
                <Comment key={id} comment={p} />
              ))}
          </div>
          <form className="textinput">
              <input type="text" placeholder="Add comment... " />
          </form>
        </div>
      );
    }
  }
  
  CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };

export default CommentContainer;