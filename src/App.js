import React from 'react';
import './App.css';

import ToyHeader from './ToyHeader'
import SearchBar from './SearchBar'
import ToysContainer from './ToysContainer'

class App extends React.Component {

  state={search: '', someOtherKey: 'someOtherValue'}

  changeStateValue = (string) => {
    this.setState({search: string})
  }

  render(){
    return(
      <div className="App">
        <ToyHeader />
        <SearchBar changeStateValue={this.changeStateValue}/>
        <ToysContainer search={this.state.search}/>
      </div>
    )
  }
}

export default App;
