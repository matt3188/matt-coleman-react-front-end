import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'containers/Home';
import About from 'components/About.js';
import Contact from 'components/Contact.js';

class Routes extends React.Component {
  templates = {
    about: About,
    contact: Contact
  };

  buildRoutes() {
    return this.props.response.pages.map((page, i) => (
      <Route
        key={i}
        component={this.templates[page.slug]}
        path={`/${page.slug}`}
        exact
      />
    ));
  }

  render() {
    return (
      <div>
        <Route path="/" component={Home} exact />
        {this.buildRoutes()}
      </div>
    );
  }
}

export default Routes;
