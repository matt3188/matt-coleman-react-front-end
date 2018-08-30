import React from 'react';

import Navigation from '../Navigation';

import './Header.css';
import Image from 'images/code.jpg';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  openNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div className="header">
        <button
          onClick={this.openNav}
          style={{ position: 'relative', zIndex: 2 }}
        >
          Open
        </button>
        {this.state.isActive && <Navigation isActive={this.state.isActive} />}
        <div
          className="header-bg"
          style={{ backgroundImage: `url(${Image})` }}
        />
      </div>
    );
  }
}

export default Header;
