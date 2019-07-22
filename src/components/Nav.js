import React from 'react'
import piggy from '../pig.gif'
import Filter from './Filter.js'
import Sorter from './Sorter.js'

export default class Nav extends React.Component {
  render() {
	return (
		<div className="navWrapper">
			<span className="headerText">Catwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Cat Fans</span>

				<Filter onGreased={this.props.onGreased}/>
				<Sorter onSorted={this.props.onSorted}/>
		</div>
	)
}
}
