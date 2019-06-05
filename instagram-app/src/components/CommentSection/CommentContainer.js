import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentContainer extends React.Component {
    constructor(props) {
      
      super(props);
      this.state = {
        comments: props.comments,
        newComment: ''

      };
      console.log(this.state.comments)
    }
    //this method takes dummydata text and username, sets it to newComment from above, and then resets the state
    // and adds newComment to comments, gets invoked from onSubmit
    addNewComment = e => {
      e.preventDefault();
      const newComment = {
        username: 'blake',
        text: this.state.newComment
      }
      this.setState ({
        comments: [...this.state.comments, newComment], 
        newComment: ''
    })
  }

  //this method takes targets name and sets it to targets value, from input onChange
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

    render() {
      return (
        <div>
          <div>
              {this.state.comments.map((p, id) => (
                <Comment key={id} comment={p} />
              ))}
          </div> 
          <form className="textinput" onSubmit={this.addNewComment}>
              <input onChange={this.handleChanges} name='newComment' value={this.state.newComment} type="text" placeholder="Add comment... " />
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