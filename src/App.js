import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ResultPage from './components/ResultPage';
import Header from './components/Header';
import NotFound from './components/404';
import apiKey from './config';

const appKey = apiKey;

class App extends Component {  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Switch>
              <Route exact path="/" render={() => <ResultPage flickrKey={appKey}/>} />
              <Route exact path="/search" render={() => <Header title="Belfast Photographic Library: Search"/>} />
              <Route exact path="/search/:tag" render={() => <ResultPage flickrKey={appKey} />} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;