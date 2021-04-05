import React from 'react';
import './App.css';
import Header from './../Header/Header.jsx';
import Search from './../Search/Search.jsx';
import ResultContainer from './../ResultContainer/ResultContainer.jsx';

const name= require('@rstacruz/startup-name-generator');
class App extends React.Component{
    state={
        headerText : 'Name-It!',
        headerExpanded: true,
        suggestionArray:[]
    };

    changeTheme = (eventText) =>{
        
        this.setState({headerExpanded : !(eventText) , suggestionArray: eventText? name(eventText) : [],
        
        });
    };
    render()
    {
        return(
            <div>
                 <Header
                 headerExpanded={this.state.headerExpanded}
                 headTitle={this.state.headerText}/>
                 <Search changeTheme={this.changeTheme} />
                 <ResultContainer suggestionArray={this.state.suggestionArray}/>
            </div>
        );
    }
}

export default App;
