import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';

const Header = (props) => {
    return (
        <div id="header">
            <h1>{ props.title }</h1>
            <form className="search-form" onSubmit={props.searchImages}>
                <input className="search-box" type="search" onChange={props.getQuery} placeholder="Search"/>
                <button><Link to={`/search/${props.searchWord}`}>Search</Link></button>
            </form>
            < Nav but1="Belfast City" but2="Forests" but3="Beaches" />
        </div>
    )
};

export default Header;