import React from 'react';
import './Name-card.css';

const nameCheapUrl="https://www.namecheap.com/domains/registration/results/?domain=%27%3B";
const Name_card=({suggestionArrays})=>{
    return  (
        <a
        target="blank"
        rel="noreferrer"
        
        className="nameLink" href={`${nameCheapUrl}${suggestionArrays}`}> 
        <div class="nameCard">
            <p className="resultNameCard">{suggestionArrays}</p>

        </div>
        </a>
    );
}

export default Name_card;


