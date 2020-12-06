import React from 'react';

import classes from './style.module.scss';

export default function EducationResultsGrid(props) {
    
    return (
        <div className={classes.educationResultsGrid}>
            {props.children}
        </div>
    );
}