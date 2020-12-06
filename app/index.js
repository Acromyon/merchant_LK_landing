import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './views/components/layout/Layout';
import Main from './views/main/Main';

ReactDOM.render(
    <Layout>
        <Main />
    </Layout>,
    document.querySelector('#app')
);