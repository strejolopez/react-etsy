import React from 'react';


const styles = {
	logo: {
		width:80,
		paddingRight:20,
	},
	search: {
		display:'flex',
		padding:24,
    borderBottom:'solid rgb(225, 227, 223)',
    paddingBottom:28,
    backgroundColor:'white'
	},
	sell: {
		display:'flex',
		position:'absolute',
    right:41
	},
	words: {
		marginRight:20,
		display:'inlineBlock',
		textDecoration:'none',
		color:'red',
		fontWeight:500
	},
	a: {
    textDecoration:'none',
    color:'rgb(1, 146, 181)'
  },
  searchbar: {
   	width:280,
    fontSize:20
  },
  button: {
  	fontSize:20,
    backgroundColor:'rgb(1, 146, 181)',
    textDecoration:'none',
    outlineStyle:'none',
    border:'1 solid black',
    borderTopRightRadius:7,
    borderBottomRightRadius:7,
    borderLeft:'none',
    color:'white',
   }
}

export default React.createClass({
	render() {
		return (
			<div style={styles.search}>
				<div>
					<img style={styles.logo} src={require("../Img/logo.png")}  alt="EtsyLogo"/>
					<input style={styles.searchbar} type="text" placeholder="Search for Items or Shops"/>
					<button style={styles.button} type="submit">Search</button>
				</div>
				<div style={styles.sell}>
					<h4 style={styles.words}><a style={styles.a} href="#">Sell on Etsy</a></h4>
					<h4 style={styles.words}><a style={styles.a} href="#">Register</a></h4>
					<h4 style={styles.words}><a style={styles.a} href="#">Sign in</a></h4>
					<a style={styles.a} href='#'><img style={styles.cart} src={require("../Img/cart.png")}  alt="Shopping Cart"/>Cart</a>
				</div>
			</div>
		)
	}
})