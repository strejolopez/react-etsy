import React from 'react';
import Search from './Search'
import Header from './Header'
import Sidebar from './Sidebar'
import Block from './Block'

const styles = {
	background: {
		backgroundColor:'rgb(250, 249, 245)'
	},
	block: {
		display:'flex'
	}
}


export default React.createClass({
	render() {
		return (
			<div style={styles.background}>
				<Search/>
				<Header/>
				<div style={styles.block}>
					<Sidebar/>
					<Block/>
				</div>
			</div>
		)
	}
})