import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styled, { css } from 'styled-components';


const PostContainerDiv = styled.div`
margin-top: 20px;    
border: 1px solid lightgrey;
border-radius: 5px;  
width: 100%;
`;

const HeadBar = styled.header`
padding: 10px;
display: flex;
border-bottom: 1px solid grey;
`;

const UserThumbnail = styled.img`
border-radius: 50%;
width: 9%;
height: 9%;
`;

const Username = styled.h3`
padding-left: 15px;
font-weight: 500;
`;

const PostImage = styled.img`
width: 100%;
border-bottom: 1px solid grey;
`;

const LikeBar = styled.section`
padding: 5px;
`;

const LikesNumber = styled.section`
padding: 5px;
`;

export default class Likes extends Component {
    state = {
        likes: this.props.post.likes,
        isLiked: false
    }

    addLike = () => {
        if(this.state.isLiked) {
            this.setState({
                likes: this.state.likes -1,
                isLiked: false
            }) 
        } else {
            this.setState({
                likes:this.state.likes + 1,
                isLiked: true
            })
        }
    }

    render() {
        console.log(this.props)
        return (
            <PostContainerDiv>                        
            <HeadBar>
                <UserThumbnail src={this.props.post.thumbnailUrl} alt="thumbnail"/>
                <Username>{this.props.post.username}</Username> 
            </HeadBar>

            <PostImage src={this.props.post.imageUrl} alt={this.props.post.id}/>

            <LikeBar>
            <div className="Icons">
                <i className={this.state.isLiked ? "fas fa-heartbeat fa-2x redheart " : "fas fa-heart-broken fa-2x" } onClick={this.addLike}></i>
                <i className="far fa-comment-dots fa-2x"></i>
            </div>
            <LikesNumber> 
                {this.state.likes} likes
            </LikesNumber>
            </LikeBar>

            <CommentSection
                comments={this.props.post.comments}
                timestamp={this.props.post.timestamp}
            />
        </PostContainerDiv>
        )
    }
}
