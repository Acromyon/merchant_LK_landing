import React from 'react';

import classes from './style.module.scss';

export default function MenuItem(props) {
    
    return (
        <li className={classes.menuItem}>
            <a
                href={props.item.href}
                className={classes.menuItem__link}
            >
                {props.item.title}
            </a>
        </li>
    );
}