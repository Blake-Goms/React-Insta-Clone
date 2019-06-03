import React from 'react';
import PostDisplay from './PostDisplay';
import './Post.css';

const PostContainer = props => {
    return (
        <div className="container">
            {props.posts.map((p, id) => (
            <PostDisplay key={id} img={p.imageUrl} post={p} />
            ))}
        </div>
    );
};
export default PostContainer;