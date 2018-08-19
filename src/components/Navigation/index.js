import React from 'react';
import './Navigation.css';
import { Route } from 'react-router-dom';

const Navigation = props => {
  props.pages.map((page, i) => {
    return (
      <Route
        key={i}
        component={this.templates[page.slug]}
        path={`/${page.slug}`}
        exact
      />
    );
  });
};

export default Navigation;
