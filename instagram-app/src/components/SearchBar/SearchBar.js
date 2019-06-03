import React from 'react';
import camera from '../../assets/camera.png';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import person from '../../assets/person.png';
import './Search.css';

const Search = () => {
    return (
        <div className="search-container">
            <div className="image">
                <img src={camera} alt="instagram icon" className="img"/>
            </div>
            <div className="text">
                <p>
                    Instagram
                </p>
                <div className="search">
                    <input type="text" placeholder="search" />
                </div>
            </div>
            
            <div className="right-container">
                <div className="social">
                    <img src={compass} alt="instagram compass" className="img"/>
                </div>
                <div className="social">
                    <img src={heart} alt="instagram heart" className="img" />
                </div>
                <div className="social">
                    <img src={person} alt="instagram person" className="img" />
                </div>
            </div>
        </div>
    );
}

export default Search;