import React from 'react';
import DataStore from 'flux/stores/DataStore';

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('home');

        return (
            <div>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{ __html: pageData.excerpt.rendered }} />
                <p>{pageData.acf.name}</p>
                <p>{pageData.acf.address}</p>
                <p>{pageData.acf.age}</p>
                <a href="{pageData.acf.email}">{pageData.acf.email}</a>
            </div>
        );
    }
}

export default Home;
