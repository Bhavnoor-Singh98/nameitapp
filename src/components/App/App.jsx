import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer'; 
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

// class based component
class App extends React.Component{

    state={
        ReaderText:'Discover Cool Names!',
        headerExpanded: true,
        suggestedNames:[],
     };

     handleInputChange=(inputText)=>{
        
         this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
     }


    render(){
        
        return(
            <div>
                <Header headTitle={this.state.ReaderText}  headerExpanded={this.state.headerExpanded}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>                
            </div>
        )
    }
}

// functional component
// function App(){
//     return <h1>This is my Functional Component!</h1>
// }
export default App;
