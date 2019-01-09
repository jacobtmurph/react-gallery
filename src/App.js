import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Gallery from './Gallery';
import apiKey from './config';

const flickrKey = apiKey;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        flickr: []
    }
  }

  componentDidMount() {
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=Belfast&per_page=24&format=json&nojsoncallback=1/`)
      .then( response => response.json())
      .then( responseData => this.setState({flickr: responseData }) )
      .catch(error => {
          console.log("Error occured when fetching and/or parsing data", error);
      });
  }

  render() {
    return (
      <div className="container">
          <Header title="Beflast Photographic Gallery" />
          <Nav but1="Belfast City" but2="Forests" but3="Beaches" />
          <Gallery pics= { this.state.flickr.photoset } /> 
      </div>
    );
  }
}

export default App;
