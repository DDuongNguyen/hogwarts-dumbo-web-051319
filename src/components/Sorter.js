import React from 'react'

export default class Sorter extends React.Component{
  render(){
    return (
      <div className='filterWrapper'>
      <button onClick={this.props.onSorted} value= 'name'>Sort By Name</button>
      <button onClick={this.props.onSorted} value= 'weight'>Sort By Chonkiness</button>
      </div>
    )
  }
}
