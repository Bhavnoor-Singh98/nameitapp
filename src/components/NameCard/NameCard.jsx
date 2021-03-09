import React from 'react';
import './NameCard.css'

const namecheapUrl='https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard=({nameSuggested}) =>{
    return(
        <a target="_blank" rel="noreferrer"
         className="card-link" href={`${namecheapUrl}${nameSuggested}`}> 
            <div className="result-name-card">
                <p className="result-name">
                    {nameSuggested}
                </p>

            </div>
        </a>
    );
}

export default NameCard;