import React from 'react';
import DataStore from 'flux/stores/DataStore';

class Experience extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug('experience');

    return (
      <div>
        <h2>Experience page template</h2>
        <h1>{pageData.title.rendered}</h1>

        <div dangerouslySetInnerHTML={{ __html: pageData.excerpt.rendered }} />
      </div>
    );
  }
}

export default Experience;
