import React from 'react';
import DataStore from 'flux/stores/DataStore';

import Hero from 'components/Hero';

import Image from '../images/code.jpg';

class Home extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug('home');

    return (
      <div>
        {console.log(pageData)}
        <div
          className="header-bg"
          style={{ backgroundImage: `url(${Image})` }}
        />
        <Hero {...pageData.acf} />
        <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} />
      </div>
    );
  }
}

export default Home;
