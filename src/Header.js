import React from 'react';

const Header = (props) => {
    return (
        <div id="header">
            <h1>{ props.title }</h1>
            <div className="search-form">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        </div>
    )
};

export default Header;