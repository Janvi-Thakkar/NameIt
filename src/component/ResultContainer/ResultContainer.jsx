import React from 'react';
import './ResultContainer.css';
import Name_card from './../Name-card/Name-card.jsx';

const ResultContainer=({suggestionArray})=>{
      const suggestName = suggestionArray.map(suggestionArrays => {
        return <Name_card key={suggestionArrays} suggestionArrays={suggestionArrays}/>;
      });
      return(
          <div className="Result-container">
             {suggestName}
          </div>
      )
}

export default ResultContainer;