import React from 'react';
import { render } from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';

import 'index.css';

import Home from 'containers/Home';
import About from 'components/About.js';
import Contact from 'components/Contact.js';
import Header from 'components/Header.js';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class App {
  templates = {
    'sample-page': About,
    contact: Contact
  };

  buildRoutes(data) {
    return data.pages.map((page, i) => {
      return (
        <Route
          key={i}
          component={this.templates[page.slug]}
          path={`/${page.slug}`}
          exact
        />
      );
    });
  }

  run() {
    DataActions.getPages(response => {
      render(
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />

              {this.buildRoutes(response)}
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
