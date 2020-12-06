import React from 'react';

import Introduction from './components/introduction/Introduction';
import OfferInfo from './components/offer_info/OfferInfo';
import EducationResults from './components/educational_results/EducationResults';

import classes from './style.module.scss';

export default function Main() {
    
    return (
        <React.Fragment>
            <Introduction />
            <OfferInfo />
            <EducationResults />
        </React.Fragment>
    );
}