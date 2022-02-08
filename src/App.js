
import './App.css';
import React from 'react';
import Profile from './Profile';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      shows: false
    }
  }
  
  handleShows=()=> this.setState({shows : !this.state.shows})

 


  render(){
    return(
      <div>
           <button onClick={this.handleShows}>{this.state.shows ? `Hide profile` : `Show profile` }</button>  
              {this.state.shows && <Profile/>}
      </div>
    )
  }
}

export default App 
