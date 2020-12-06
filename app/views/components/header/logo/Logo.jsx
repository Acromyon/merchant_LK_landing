import React from 'react';

import logo from './logo.png';
import classes from './style.module.scss';

export default function Logo() {
    
    return (
        <a
            href="/"
            className={classes.logo}
        >
            <img src={logo}
                 alt="logotype"/>
        </a>
    );
}