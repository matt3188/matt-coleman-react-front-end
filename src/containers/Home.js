import React from 'react';
import DataStore from 'flux/stores/DataStore';

import Hero from 'components/Hero';

class Home extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug('home');

    return (
      <div>
        <Hero {...pageData.acf} />
        <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} />
      </div>
    );
  }
}

export default Home;
