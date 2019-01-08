import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }
    
    componentDidMount() {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.apiKey}&tags=Belfast&per_page=24&format=json&nojsoncallback=1/`)
        .then( response => response.json())
        .then( responseData => this.setState({photos: responseData }) )
        .catch(error => {
            console.log("Error occured when fetching and/or parsing data", error);
        });
    }

    render() {
        console.log()
        console.log(this.state.photos);
        return (
            <h1>Results</h1>
        );
    }
}

export default Gallery;