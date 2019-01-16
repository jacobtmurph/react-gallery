import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/404';
import Gallery from './components/Gallery';
import apiKey from './config';

const flickrKey = apiKey;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flickr: [],
      searchWord: "",
      loading: true
    }
  }

 componentDidMount() {
      this.performSearch("Belfast");
  }


  getSearchWords = e => {
      this.setState({searchWord: e.target.value});
  };

  getTags = (...queries) => {
    let tags = queries.reduce((count, tag) => {
      let tagString = "";
      if (count === 0) {
        tagString += `${tag}`;
        count += 1;
      } else {
        tagString += `%2C+${tag}`;
        count += 1;
      }

      return tagString
    }, 0)

    return tags;
  };


  performSearch = (...queries) => {
    let tags = this.getTags(queries);

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${tags}&place_id=sv0jEhFVVr8ROg&per_page=24&format=json&nojsoncallback=1`).then( response => response.json())
      .then( responseData => this.setState({flickr: responseData.photos.photo, loading: false }) )
      .catch(error => {
          console.log("Error occured when fetching and/or parsing data", error);
      });
  };

  filterImages = (e, ...queries) => {
      e.preventDefault();
      this.performSearch(this.state.searchWord);
      e.currentTarget.reset();
  };


  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Switch>
              <Route exact path="/" render={() => <div>
                                              <Header title="Belfast Photographic Library" searchWord={this.state.searchWord} searchImages={this.filterImages} getQuery={this.getSearchWords}/> 
                                              {
                                                (this.state.loading)
                                                ? <span>Loading</span>
                                                :<Gallery loading={this.state.loading} pics={this.state.flickr}/>
                                              } 
                                            </div>} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;