import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';


class ResultPage extends Component {
  //Set the inital state for the image container, and loading condition
    constructor(props) {
      super(props);
      this.state = {
        flickr: [],
        loading: true
      }
    }
  //When the Result Page mounts
  componentDidMount() {
        //If there is has been a search requested
        if (this.props.match.params.tag) {
            //Search for images tagged with the keyword
            this.performSearch(`${this.props.match.params.tag}`);
        } else {
          //Get all images from the Belfast GeoLocation
          this.performSearch("");
        }
    }

    //If the component updates, i.e. through NavLinks
    componentDidUpdate () {
        //Search for the requested tag
        this.performSearch(`${this.props.match.params.tag}`);
    }
    //If multiple keywords are searched
    getTags = (...queries) => {
      //Format each keyword into an indiviual urltag
      let tags = queries.reduce((count, tag) => {
        let tagString = "";
        if (count === 0) {
          tagString += `${tag}`;
          count += 1;
        } else {
          tagString += `%2C+${tag}`;
          count += 1;
        }
        //Return the string of search tags
        return tagString
      }, 0)

      return tags;
    };

    //When a search is requested
    performSearch = (...queries) => {
      //Get the tag string
      let tags = this.getTags(queries);
      //Fetch and pass the images to the flickr state
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.flickrKey}&tags=${tags}&place_id=sv0jEhFVVr8ROg&per_page=24&format=json&nojsoncallback=1`).then( response => response.json())
        .then( responseData => this.setState({flickr: responseData.photos.photo, loading: false }) )
        //If an error occurs during the fetch
        .catch(error => {
            //Log the error in a user-friendly way to the console.
            console.log("Error occured when fetching and/or parsing data", error);
        });
    };

      //Rendered JSX
      render() {
        return (
            <div>
            <Header title="Belfast Photographic Library" />
            {/* If loading */}
            {
              (this.state.loading)
              // Display a loading tag
              ? <span>Loading...</span>
              //Else, display the gallery with the images and search word for header
              :<Gallery pics={this.state.flickr} searchTag={this.props.match.params.tag}/>
            } 
          </div>
        )
      };
};

// Export the ResultPage with access to the Routers match object.
export default withRouter(ResultPage);