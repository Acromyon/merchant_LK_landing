import React from 'react';

import MenuItem from './MenuItem';

import classes from './style.module.scss';

export default function MenuList(props) {
    
    return (
        <ul className={classes.menuList}>
            {props.menuList.map((item, i) => <MenuItem key={i} item={item} />)}
        </ul>
    );
}