import React from 'react';

import logo from './logo.svg';

import classes from './style.module.scss';

export default function Logo() {
    
    return (
        <div className="logo">
            <a href="/">
                <img src={logo}
                     alt="logotype"/>
            </a>
        </div>
    );
}