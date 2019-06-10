import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import "./SearchBar.css"

const Bar = styled.div`
margin: 0 auto;
border-bottom: 1px solid #3333;
height: 45px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: baseline;
align-items: baseline;
`;


class SearchBar extends Component {
    render() { 
        return ( 
            <Bar>
                <i class="fab fa-instagram fa-2x"></i>
                <span> Instagram</span>
                <input
                    name="search"
                    onChange={this.props.searchFilter}
                    placeholder=" Search..."
                    type="text"
                    value={this.props.newSearch}
                />
                <i className="far fa-compass  fa-2x"></i>
                <i className="fas fa-heartbeat  fa-2x"></i>
                <i className="fas fa-user-circle  fa-2x"></i>
            </Bar>
        );
    }
}

export default SearchBar;