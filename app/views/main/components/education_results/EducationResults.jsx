import React from 'react';

import EducationResultsGrid from './education_results_grid/EducationResultsGrid';
import EducationResultsItem from './education_results_grid/EducationResultsItem';

import classes from './style.module.scss';

export default function EducationResults(props) {
    
    return (
        <section className={classes.educationResults}>
            <div className="container">
                <h3 className={classes.title}>
                    {props.contentData.title}
                </h3>
                <EducationResultsGrid>
                    {props.contentData.skills_list.map((item, i) => <EducationResultsItem key={i} item={item} />)}
                </EducationResultsGrid>
            </div>
        </section>
    );
}