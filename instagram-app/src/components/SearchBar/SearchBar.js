import React, {Component} from 'react';

class SearchBar extends Component {
    render() { 
        return ( 
            <input
                name="search"
                onChange={this.props.searchFilter} //called from app,js
                placeholder="search..."
                type="text"
                // value={this.props.newSearch}
            />
        );
    }
}

export default SearchBar;