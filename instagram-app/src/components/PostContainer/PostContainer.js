import React, {Component} from 'react';
import Likes from './Likes'

class PostContainer extends Component {

    render() { 
        return ( 
            <>
                {this.props.filteredPosts.length === 0 ? this.props.data.map(post => {
                    return (
                        <Likes post={post}/>
                    )
                }) : this.props.filteredPosts.map(post => {
                    return (
                        <Likes post={post}/>
                    )}
                )
                }
        </>
    )
}
}


export default PostContainer;