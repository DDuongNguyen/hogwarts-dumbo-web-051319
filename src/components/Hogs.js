import React from 'react';
export default class Hogs extends React.Component{
   snakeCase = (s) => {
     return s.toLowerCase().split(' ').join('_')
   }

    state = {
      displayButton: '',
      display: 'none',
      hideButton: 'none'
    }

    appearClick = (event) => {
      // debugger
      this.setState({
        display: '',
        displayButton: 'none',
        hideButton: ''
      })
    }

    disappearClick = (event) => {
      // debugger
      this.setState({
        display: 'none',
        displayButton: '',
        hideButton: 'none'
      })
    }

  render(){
    const weirdWeight= this.props.hogData['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

    const medal= this.props.hogData['highest medal achieved']

    return (
      <div className='pigTile' >
      <img src={`/hog-imgs/${this.snakeCase(this.props.hogData.name)}.jpg`} alt='cat aint founded'/>
      <h4 className='smallHeader'>{this.props.hogData.name}</h4>
      <button onClick={this.appearClick} style={{display: this.state.displayButton}}>Show This Cat</button>
      <button onClick={this.disappearClick} style={{display: this.state.hideButton}}>Hide This Cat</button>
      <div style={{display: this.state.display}}>
      <p className='normalText'>Specialty: {this.props.hogData.specialty}</p>
      <p className='normalText'>Greased: {this.props.hogData.greased ? "Yes" : "No"}</p>
      <p className='normalText'>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weirdWeight}</p>
      <p className='achievementText'>Highest medal achieved: {medal}</p>
      </div>
      </div>
    )
  }
}









// {name: "Mudblood",
// specialty: "Mediocre magic",
// greased: false,
// weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: 2,
// highest medal achieved: "bronze"}
