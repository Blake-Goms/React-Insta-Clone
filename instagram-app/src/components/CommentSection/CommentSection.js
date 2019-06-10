import React, {Component} from 'react';
import styled, { css } from 'styled-components';

const CommentSectionDiv = styled.div`
font-weight: 400;
display: inline-block;
padding-left: 10px;
`;

const UserCommentDiv = styled.div`
font-weight: 400;
display: inline-block;
padding-left: 10px;
`;

const TimeStamp = styled.p`
color: grey;
font-size: 12px;
`;

class CommentSection extends Component {
    state = {
        comments: this.props.comments,
        newComment: ''
    }

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'blakerockzz',
            text: this.state.newComment
        }

        this.setState({ 
            comments: [...this.state.comments, newComment], 
            newComment: ''
            })
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        return ( 
            <CommentSectionDiv>
                <UserCommentDiv>
                    {this.state.comments.map(comment => {
                        return (
                        <>
                            <h4> {comment.username}: </h4>
                            <p>{comment.text}</p>
                        </>
                        )
                    })}
                    </UserCommentDiv>
                <TimeStamp>{this.props.timestamp}</TimeStamp>
                <form onSubmit={this.addNewComment}>
                    <input
                    name="newComment" 
                    onChange={this.changeHandler}
                    placeholder="add a comment..."
                    type="text" 
                    value={this.state.newComment}
                />
                </form>
            </CommentSectionDiv> 
            );
    }
}

export default CommentSection;