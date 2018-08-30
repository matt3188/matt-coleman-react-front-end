import React from 'react';
import DataStore from 'flux/stores/DataStore';

class Contact extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug('contact');

    return (
      <div>
        <h1>{pageData.title.rendered}</h1>

        <div dangerouslySetInnerHTML={{ __html: pageData.excerpt.rendered }} />
        <div>{pageData.acf.text}</div>
      </div>
    );
  }
}

export default Contact;
