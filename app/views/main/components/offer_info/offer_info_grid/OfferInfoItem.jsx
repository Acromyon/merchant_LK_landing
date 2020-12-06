import React from 'react';

import classes from './style.module.scss';

export default function OfferInfoItem(props) {
    
    return (
        <div className={classes.offerInfoItem}>
            <h5 className={classes.title}>
                {props.item.title}
            </h5>
            <span className={classes.label}>
                {props.item.label}
            </span>
        </div>
    );
}