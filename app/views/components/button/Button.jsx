import React from 'react';

import './style.scss';

export default function Button(props) {
    
    return (
        <button
            className={`button button-${props.btnType}`}
            style={{minWidth: props.minWidth}}
        >
            {props.btnText}
        </button>
    );
}