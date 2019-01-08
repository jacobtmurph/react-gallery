import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="container">
          <Header title="Beflast Photographic Gallery" />
          <Nav but1="Belfast City" but2="Forests" but3="Beaches" />
      </div>
    );
  }
}

export default App;
