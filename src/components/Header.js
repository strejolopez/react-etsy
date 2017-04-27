import React from 'react';

const styles = {
	flex: {
		display:'flex',
		listStyle:'none',
		marginTop:0,
    paddingTop:21
	},
	a: {
    textDecoration:'none',
    color:'rgb(119, 119, 119)',
    marginRight:30
  },
  body: {
  	borderBottom:'solid rgb(225, 227, 223)',
    paddingBottom:5,
    background:'white'
  }
}


export default React.createClass({
	render() {
		return (
			<div style={styles.body}>
				<ul style={styles.flex}>
					<li><a style={styles.a} href="#">Clothing & Accessories</a></li>
					<li><a style={styles.a} href="#">Jewelry</a></li>
					<li><a style={styles.a} href="#">Craft Supplies & Tools</a></li>
					<li><a style={styles.a} href="#">Weddings</a></li>
					<li><a style={styles.a} href="#">Entertainment</a></li>
					<li><a style={styles.a} href="#">Home & Living</a></li>
					<li><a style={styles.a} href="#">Kids & Baby</a></li>
					<li><a style={styles.a} href="#">Clothing & Accessories</a></li>
				</ul>
			</div>
		)
	}
})