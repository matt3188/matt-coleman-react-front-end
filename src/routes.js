import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'containers/Home';
import About from 'containers/About';
import Experience from 'containers/Experience';
import Work from 'containers/Work';
import Contact from 'containers/Contact';

class Routes extends React.Component {
  templates = {
    about: About,
    experience: Experience,
    work: Work,
    contact: Contact
  };

  buildRoutes() {
    return this.props.response.pages.map(page => (
      <Route
        key={page.id}
        component={this.templates[page.slug]}
        data={{ ...page }}
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
