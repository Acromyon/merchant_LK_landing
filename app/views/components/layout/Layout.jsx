import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import './reset.scss';

export default function Layout(props) {
    
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}