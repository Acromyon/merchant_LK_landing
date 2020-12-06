import React from 'react';

import classes from './style.module.scss';

export default function OfferInfoGrid(props) {
    
    return (
        <div className={classes.offerInfoGrid}>
            {props.children}
        </div>
    );
}