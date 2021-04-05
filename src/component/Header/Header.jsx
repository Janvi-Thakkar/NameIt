import React from 'react';
import './Header.css';

const Header=({headTitle, headerExpanded})=>{
      return(
          <div className="header-container">
                <img className={`head-img ${headerExpanded ? 'head-img-expand' : 'head-img-contracted'}`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"/>
                <h5 className={`head-text ${headerExpanded ? 'head-text-expand' : 'head-text-contracted'}`}>{headTitle}</h5>
          </div>
      )
}

export default Header;