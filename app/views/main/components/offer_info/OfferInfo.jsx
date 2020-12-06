import React from 'react';

import OfferInfoGrid from './offer_info_grid/OfferInfoGrid';
import OfferInfoItem from './offer_info_grid/OfferInfoItem';

import classes from './style.module.scss';

export default function OfferInfo(props) {
    
    return (
        <section className={classes.offerInfo}>
            <div className="container">
                <OfferInfoGrid>
                    {props.contentData.map((item, i) => <OfferInfoItem key={i} item={item}/>)}
                </OfferInfoGrid>
            </div>
        </section>
    );
}