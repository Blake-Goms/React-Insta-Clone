import React, {Component} from 'react';
import heart from '../../assets/heart.png';
import chat from '../../assets/chat.png';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

class PostContainer extends Component {
    render() { 
        return ( 
            <>
                {this.props.filteredPosts.length === 0 ? this.props.data.map(post => {
                    return (
                        <div className="PostContainer">                        
                            <header className="headerBar">
                                <img src={post.thumbnailUrl} alt="thumbnail" className="UserThumbnail"/>
                                <h3 className="Username">{post.username}</h3>
                            </header>

                            <img src={post.imageUrl} alt={post.id} className="PostImage"/>

                            <section className="likebar">
                                {post.likes} likes
                            </section>

                            <CommentSection 
                                comments={post.comments}
                                timestamp={post.timestamp}
                            />
                        </div>
                    )
                }) : this.props.filteredPosts.map(post => {
                    return (
                        <div className="PostContainer">                        
                        <header className="headerBar">
                            <img src={post.thumbnailUrl} alt="thumbnail" className="UserThumbnail"/>
                            <h3 className="Username">{post.username}</h3>
                        </header>

                        <img src={post.imageUrl} alt={post.id} className="PostImage"/>

                        <section className="likebar">
                            {post.likes} likes
                        </section>

                        <CommentSection 
                            comments={post.comments}
                            timestamp={post.timestamp}
                        />
                    </div>
                    ) }
                )
                }
        </>
    )
}
}


export default PostContainer;