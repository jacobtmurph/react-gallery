import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './Nav';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: "",
        }
    }

    getSearchWords = e => {
        this.setState({searchWord: e.target.value});
    };

    render() {
        return (
            <div id="header">
                <h1>{ this.props.title }</h1>
                <form className="search-form" onSubmit={ () => this.props.history.push(`/search/${this.state.searchWord}`)}>
                    <input className="search-box" type="search" onChange={this.getSearchWords} placeholder="Search"/>
                    <button type="submit">Search</button>
                </form>
                < Nav but1="Belfast City" but2="Forests" but3="Beaches" />
            </div>
        )
    }
};

export default withRouter(Header);