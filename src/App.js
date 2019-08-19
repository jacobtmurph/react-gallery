import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import ResultPage from './components/ResultPage';
import Header from './components/Header';
import NotFound from './components/404';
//Get the apiKey for the FlickrAPI
import apiKey from './config';

const appKey = apiKey;

const App = () =>  {  
    return (
      <HashRouter>
        <div className="container">
          {/* If Routes are available, display them with necessary data */}
            <Switch>
              <Route exact path="/react-gallery" render={() => <ResultPage flickrKey={appKey}/>} />
              <Route exact path="/react-gallery/search" render={() => <Header title="React Photo Library: Search"/>} />
              <Route exact path="/react-gallery/search/:tag" render={() => <ResultPage flickrKey={appKey} />} />
              {/* Else, display a 404 page */}
              <Route component={NotFound} />
            </Switch>
        </div>
      </HashRouter>
    );
};

// Export the App
export default App;