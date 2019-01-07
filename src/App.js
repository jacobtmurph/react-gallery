import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="search-form">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <div className="main-nav">
            <ul>
              <li><a href="#top">Cats</a></li>
              <li><a href="#top">Dogs</a></li>
              <li><a href="#top">Birds</a></li>
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
