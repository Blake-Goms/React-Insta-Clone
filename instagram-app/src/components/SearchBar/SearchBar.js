import React, {Component} from 'react';
import camera from '../../assets/camera.png';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import person from '../../assets/person.png';
import "./SearchBar.css"

class SearchBar extends Component {
    render() { 
        return ( 
            <div className="searchBar">
                <img src={camera} alt="camera" className="image" />
                <span>Instagram</span>
                <input
                    name="search"
                    onChange={this.props.searchFilter} //called from app,js
                    placeholder="search..."
                    type="text"
                    value={this.props.newSearch}
                />
                <img src={compass} alt="compass" className="image"/>
                <img src={heart}  alt="heart" className="image" />
                <img src={person}  alt="person" className="image" />
            </div>
        );
    }
}

export default SearchBar;