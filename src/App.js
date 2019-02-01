import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ResultPage from './components/ResultPage';
import Header from './components/Header';
import NotFound from './components/404';
//Get the apiKey for the FlickrAPI
import apiKey from './config';

const appKey = apiKey;

const App = () =>  {  
    return (
      <BrowserRouter>
        <div className="container">
          {/* If Routes are available, display them with necessary data */}
            <Switch>
              <Route exact path="/" render={() => <ResultPage flickrKey={appKey}/>} />
              <Route exact path="/search" render={() => <Header title="Belfast Photographic Library: Search"/>} />
              <Route exact path="/search/:tag" render={() => <ResultPage flickrKey={appKey} />} />
              {/* Else, display a 404 page */}
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
};

// Export the App
export default App;