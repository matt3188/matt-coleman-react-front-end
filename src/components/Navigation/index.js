import React from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import DataStore from 'flux/stores/DataStore';

import './Navigation.css';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: this.props.isActive
    };
  }

  closeNav() {
    this.setState({ isActive: !this.state.isActive });
  }
  render() {
    // Sort pages by order
    let allPages = DataStore.getAllPages();
    allPages = _.sortBy(allPages, [
      page => {
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
                onClick={this.closeNav}
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
