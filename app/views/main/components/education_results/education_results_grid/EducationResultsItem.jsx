import React from 'react';

import classes from './style.module.scss';

export default function EducationResultsItem(props) {
    
    return (
        <div className={classes.educationResultsItem}>
            <div
                className={classes.icon}
                style={{backgroundImage: `url(${props.item.iconURL})`}}
            />
            <h5 className={classes.title}>
                {props.item.title}
            </h5>
            <p className={classes.description}>
                {props.item.description}
            </p>
        </div>
    );
}