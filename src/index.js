import React from 'react';
import { render } from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';

import './styles/index.scss';

import Header from 'components/Header';
import Routes from 'routes';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App {
  run() {
    DataActions.getPages(response => {
      console.log(response);

      render(
        <Router>
          <div>
            <Header />
            <Switch>
              <Routes response={response} />
              <Route
                render={() => {
                  return <Redirect to="/" />;
                }}
              />
            </Switch>
          </div>
        </Router>,

        document.getElementById('root')
      );
    });
  }
}

new App().run();
