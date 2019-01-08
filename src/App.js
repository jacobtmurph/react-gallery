import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Gallery from './Gallery';
import apiKey from './config';

const flickrKey = apiKey;

class App extends Component {

  render() {
    return (
      <div className="container">
          <Header title="Beflast Photographic Gallery" />
          <Nav but1="Belfast City" but2="Forests" but3="Beaches" />
          <Gallery apiKey={ flickrKey } /> 
      </div>
    );
  }
}

export default App;
