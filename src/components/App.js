import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    filterTerm: 'all',
    sortedTerm: ''
  }

  onGreased = (event) => {
    this.setState({
      filterTerm: event.target.value
    })
  }

  onSorted = (event) => {
    this.setState({
      sortedTerm: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
          < Nav onGreased={this.onGreased} onSorted={this.onSorted}/>
          < HogList data={hogs} filterTerm={this.state.filterTerm} sortedTerm={this.state.sortedTerm}/>
      </div>
    )
  }
}

export default App;
