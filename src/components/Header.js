import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './Nav';


class Header extends Component {
    //Set the state for the searchWord
    constructor(props) {
        super(props);
        this.state = {
            searchWord: "",
        }
    }

    //Retrive & set the searchWord state as input is being typed.
    getSearchWords = e => {
        this.setState({searchWord: e.target.value});
    };

    //Returned JSX
    render() {
        return (
            <div id="header">
                {/* Display the page title */}
                <h1>{ this.props.title }</h1>
                {/* Search form, redirects to a new ResultPage with search when submitted */}
                <form className="search-form" onSubmit={ () => this.props.history.push(`/search/${this.state.searchWord}/`)}>
                    {/* Input box that catches search query via the getSearchWords function */}
                    <input className="search-box" type="search" onChange={this.getSearchWords} placeholder="Search"/>
                    <button type="submit">Search</button>
                </form>
                {/* Nav Element */}
                < Nav />
            </div>
        )
    }
};

// Export the Header with access to the Router's history object.
export default withRouter(Header);