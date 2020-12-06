import React from 'react';

import Introduction from './components/introduction/Introduction';
import OfferInfo from './components/offer_info/OfferInfo';
import EducationResults from './components/education_results/EducationResults';

import {content_data} from '../../static_data';

export default function Main() {
    
    return (
        <React.Fragment>
            <Introduction contentData={content_data.introduction} />
            <OfferInfo contentData={content_data.offer_info} />
            <EducationResults contentData={content_data.education_results} />
        </React.Fragment>
    );
}