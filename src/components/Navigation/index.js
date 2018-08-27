import React from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import DataStore from 'flux/stores/DataStore';

import './Navigation.css';

class Navigation extends React.Component {
  render() {
    // Sort pages by order
    let allPages = DataStore.getAllPages();
    allPages = _.sortBy(allPages, [
      function(page) {
        return page.menu_order;
      }
    ]);

    return (
      <nav className="navigation">
        {allPages.map(page => {
          if (page.slug !== 'home') {
            return (
              <Link
                key={page.id}
                to={`/${page.slug}`}
                style={{ marginRight: '10px' }}
              >
                {page.title.rendered}
              </Link>
            );
          }
          return false;
        })}
      </nav>
    );
  }
}

export default Navigation;
