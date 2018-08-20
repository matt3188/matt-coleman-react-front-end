import React from 'react';
import DataStore from 'flux/stores/DataStore';

class About extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug('about');

    return (
      <div>
        <h1>{pageData.title.rendered}</h1>

        <div dangerouslySetInnerHTML={{ __html: pageData.excerpt.rendered }} />
        <div>{pageData.acf.text}</div>
      </div>
    );
  }
}

export default About;
