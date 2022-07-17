import React from 'react';
import './App.css';
import Header from './component/Header/Header.jsx';
import Search from './component/Search/Search.jsx';
import ResultContainer from './component/ResultContainer/ResultContainer.jsx';

const name = require( '@rstacruz/startup-name-generator' );
class App extends React.Component
{
    state = {
        headerText: 'Name-It!',
        headerExpanded: true,
        suggestionArray: []
    };

    changeTheme = ( eventText ) =>
    {

        this.setState( {
            headerExpanded: !( eventText ),suggestionArray: eventText ? name( eventText ) : [],

        } );
    };
    render()
    {
        return (
            <div>
                <Header
                    headerExpanded={ this.state.headerExpanded }
                    headTitle={ this.state.headerText } />
                <Search changeTheme={ this.changeTheme } />
                <ResultContainer suggestionArray={ this.state.suggestionArray } />
            </div>
        );
    }
}

export default App;
