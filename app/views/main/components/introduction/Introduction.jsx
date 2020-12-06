import React from 'react';

import Button from '../../../components/button/Button';

import picture from './picrure.svg';
import classes from './style.module.scss';

export default function Introduction(props) {
    
    return (
        <div className={classes.introductionSection}>
            <div className="container">
                <div className={classes.gridWrap}>
                    <div className={classes.gridWrapVertical}>
                        <h3 className={classes.title}>
                            {props.contentData.title}
                        </h3>
                        <p className={classes.description}>
                            {props.contentData.description}
                        </p>
                        <Button
                            btnText={props.contentData.btn_text}
                            btnType="accent"
                            minWidth="240px"
                        />
                    </div>
                    <img src={picture}
                         className={classes.picture}
                         alt="introduction_picture"/>
                </div>
            </div>
        </div>
    );
}