import React from 'react'

import store from '../store'
import {getData} from '../api/etsyActions.js'
import '../index.css';


const styles = {
	img: {
		width:252,
		height:178
	},
	box: {
		width:252,
    height:235,
    backgroundColor:'white',
    marginTop:20,
    marginRight:20,
    border:'solid 1px black',
    borderRadius:'2%'
	},
	container: {
		display:'flex',
    flexWrap:'wrap',
    justifyContent:'spaceBetween',
    margin:'auto',
    marginLeft:30,
    marginTop:13
	},
	text: {
		whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
		textDecoration:'none',
		color:'black',
		paddingLeft:10
	},
	left: {
		float:'right',
		textDecoration:'none',
		color:'rgb(120, 192, 66)',
		paddingTop:10,
		paddingRight:3
	},
	a: {
		textDecoration:'none'
	},
	top: {
		display:'flex'
	},
	categories: {
		marginLeft:20,
		marginRight:613
	},
	select: {
		border:'none',
		fontSize:18
	}
}

class Block extends React.Component {
	constructor() {
		super()
		this.state = {
			items:[]
		}
	}

	componentWillMount() {
		store.subscribe(()=>{
			const appState = store.getState()
			this.setState({
				items:appState.items
			})
		})
		getData()
	}

	render() {
		return (
			<main>
			<div style={styles.top}>
				<p style={styles.categories}>All categories  “whiskey” (25, Results)</p>
				<p>Sort By:</p>
				<select style={styles.select} name="Relevency">
						<option value="">Relevency</option>
						<option value="">Most Recent</option>
						<option value="">Highest Price</option>
						<option value="">Lowest Price</option>
				</select>
			</div>
			<div style={styles.container}>
    			{this.state.items.map(item=>(
    				<div style={styles.box} key={item.listing_id}>
    					<a style={styles.a} href={item.url}>
      					<img classname="pic" style={styles.img} alt="" src={item.Images[0].url_570xN}/>
      					<div>
                  <div style={styles.text}>{item.title}</div>
                  <div>{item.shop_name}</div>
                  <div style={styles.left}>${item.price}</div>
      					</div>
              </a>
    				</div>
    			))}
    	</div>
		  </main>
		)
	}



}
export default Block