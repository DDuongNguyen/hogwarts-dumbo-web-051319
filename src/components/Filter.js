import React from 'react'

export default class Filter extends React.Component{
  render(){
    return (
      <div className='filterWrapper'>
      <button onClick={this.props.onGreased} value= 'all'>Show All</button>
      <button onClick={this.props.onGreased} value= 'greased'>Show Only Greased</button>
      <button onClick={this.props.onGreased} value= 'non-greased'>Show Only Non-greased</button>
      </div>
    )
  }
}








// Filter: Greased? <input type="radio" />
// Filter: Greased? <input type="radio" />
// Filter: Greased? <input type="radio" />
