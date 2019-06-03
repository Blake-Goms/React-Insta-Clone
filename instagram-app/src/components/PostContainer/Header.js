import React from 'react';
import './Post.css';

const Header = props => {
    return ( 
        <div className="profile-container">  
            <div>
                <img
                    alt="post header"
                    className="profile-thumbnail"
                    src={props.thumbnailUrl}
                />
            </div>
            <div className="username">{props.username}</div>
        </div> 
    );
};

export default Header;