import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="main-nav">
            {/* Link to common search queries */}
            <ul>
              <li><Link to="/search/city">City</Link></li>
              <li><Link to="/search/forest"> Forests </Link></li>
              <li><Link to="/search/mural">Murals</Link></li>
            </ul>
          </div>
    )
};
// Export the Navigation menu
export default Nav;