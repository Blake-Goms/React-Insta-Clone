import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import Header from './Header';
import './Post.css';
import heart from '../../assets/heart.png';
import chat from '../../assets/chat.png';

const PostDisplay = props => {

  const addlike = () => {
    console.log(props.likes)
    //console.log(props.likes += 1)
    let add = props.likes + 1
    return add;
  }

  // const removelike = () => {
  //   console.log('in removelike')
  // }
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
      <img onClick={addlike} src={heart} alt="instagram heart" className=" interaction-img" />

      {/* {props.likes ? <img onClick={addlike} src={heart} alt="instagram heart" className=" interaction-img" /> :
        <img onClick={removelike} src={heart} alt="instagram heart" className=" interaction-img" />} */}
      
      <img src={chat} alt="instagram chat" className="interaction-img" />
      </div>
      <div className="spanlikes">
        <span className="likes">{props.likes} likes</span>
      </div>
      <CommentContainer comments={props.post.comments} />
    </div>
  );
};


// class PostDisplay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       post: this.props.post,
//       clicked: false,
//       likes: this.props.likes,
//       comments: [],
//       newComment: ''
//     };
//   }
// componentDidMount() {
//   this.setState({
//     comments: this.props.post.comments
//   })
//   }

//   addNewComment = e => {
//     e.preventDefault();
//     const newComment = {
//       username: 'blake',
//       text: this.state.newComment
//     }
//     this.setState ({
//       comments: [...this.state.post.comments, newComment], 
      
//   })
// }

//   addLike = () => {
//   console.log(this.setState({likes: this.state.likes + 1, clicked: true}))
    
// }

// removeLike = () => {
//   this.setState({likes: this.state.likes - 1, clicked: false})
// }

//   render() {
//     console.log(this.state.post)
//     return(
//       <div className="post-border">
//         <Header
//           username={this.state.post.username}
//           thumbnailUrl={this.state.post.thumbnailUrl}
//         />
//         <div>
//           <img
//             alt="post thumbnail"
//             className="post-image"
//             src={this.state.post.imageUrl}
//           />
//         </div>
//         <div className="interaction">
//         <img  src={heart} alt="instagram heart" className=" interaction-img" />
  
//         {this.state.likes ? <img onClick={this.addLike} src={heart} alt="instagram heart" className=" interaction-img" /> :
//           <img onClick={this.removeLike} src={heart} alt="instagram heart" className=" interaction-img" />}
        
//         <img src={chat} alt="instagram chat" className="interaction-img" />
//         </div>
//         <div className="spanlikes">
//           <span className="likes">{this.state.likes}likes</span>
//         </div>
//         <CommentContainer newComment={this.state.newComment} comments={this.state.comments} addNewComment={this.addNewComment} />
//       </div>
//     );    
//   }
// }
export default PostDisplay;