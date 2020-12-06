import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import './reset.scss';
import './style.scss';

export default function Layout(props) {
    
    return (
        <React.Fragment>
            <div className="wrapper">
                <Header />
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    );
}