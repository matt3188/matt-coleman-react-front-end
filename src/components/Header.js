import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import DataStore from 'flux/stores/DataStore';

class Header extends React.Component {
  render() {
    // Sort pages by order
    let allPages = DataStore.getAllPages();
    allPages = _.sortBy(allPages, [
      function(page) {
        return page.menu_order;
      }
    ]);

    return (
      <div className="header">
        <Link to="/" style={{ marginRight: '10px' }}>
          Home
        </Link>

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
      </div>
    );
  }
}

export default Header;
