import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';


class ResultPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flickr: [],
      loading: true
    }
  }

 componentDidMount() {
      if (this.props.match.params.tag) {
          this.performSearch(`${this.props.match.params.tag}`);
      } else {
        this.performSearch("");
      }
  }
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

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.flickrKey}&tags=${tags}&place_id=sv0jEhFVVr8ROg&per_page=24&format=json&nojsoncallback=1`).then( response => response.json())
      .then( responseData => this.setState({flickr: responseData.photos.photo, loading: false }) )
      .catch(error => {
          console.log("Error occured when fetching and/or parsing data", error);
      });
  };

    render() {
     return (
        <div>
        {
          (!this.props.match.params.tag)
          ?<Header title="Belfast Photographic Library" />
          :<Header title={`Belfast Photographic Library: ${this.props.match.params.tag}`} />
        } 
        {
          (this.state.loading)
          ? <span>Loading...</span>
          :<Gallery pics={this.state.flickr}/>
        } 
      </div>
     )
    };
};

export default withRouter(ResultPage);