import React from 'react';
import './Search.css';

const Search = ({changeTheme}) =>{
      return(
          <div className="search-container">
                <input onChange={(event)=>changeTheme(event.target.value)} 
                placeholder="Type Keyword" 
                type="text"
                className="search-input"/>
          </div>
      )
}

export default Search;