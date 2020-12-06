import React from 'react';

import MenuItem from './MenuItem';

import classes from './style.module.scss';

export default function MenuList(props) {
    
    return (
        <ul className="menu-list">
            {props.menuList.map((item, i) => <MenuItem key={i} item={item} />)}
        </ul>
    );
}