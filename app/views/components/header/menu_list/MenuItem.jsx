import React from 'react';

import classes from './style.module.scss';

export default function MenuItem(props) {
    
    return (
        <li className="menu-item">
            <a href={props.item.href}>
                {props.item.title}
            </a>
        </li>
    );
}