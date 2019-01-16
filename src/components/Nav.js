import React from 'react';

const Nav = (props) => {
    return (
        <div className="main-nav">
            <ul>
              <li><a href="#top">{ props.but1 }</a></li>
              <li><a href="#top"> { props.but2 }</a></li>
              <li><a href="#top">{ props.but3 }</a></li>
            </ul>
          </div>
    )
};

export default Nav;