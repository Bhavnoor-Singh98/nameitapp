import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer= ({suggestedNames})=>{
    const suggestNameJsx=suggestedNames.map((nameSuggested) => {
        return <NameCard key={nameSuggested} nameSuggested={nameSuggested}/>
    });
    return(
        <div className="results-container">
            {suggestNameJsx}
        </div>
    ); 
}

export default ResultsContainer;