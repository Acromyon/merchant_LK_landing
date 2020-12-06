import React from 'react';

import MenuList from './menu_list/MenuList';
import Logo from './logo/Logo';
import Button from '../button/Button';

import {header_data} from '../../../static_data';

import classes from './style.module.scss';

export default function Header() {
    
    return (
        <header className={classes.header}>
            <div className="container">
                <nav className={classes.headerNav}>
                    <Logo />
                    <MenuList menuList={header_data.menu_list} />
                    <Button
                        btnText={header_data.btn_text}
                        btnType="default"
                    />
                </nav>
            </div>
        </header>
    );
}