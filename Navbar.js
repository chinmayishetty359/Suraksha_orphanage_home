import React from 'react'
import {Link} from 'react-router-dom'
import "../css/nav.css"



class Navbar extends React.Component {
  
    render() {
        return (
           <div class="n">
			<div class="special">
				<h><b>S</b>uraksha</h>
			</div>
			<Link to="/Contact_Us">Contact Us</Link>
			<Link to="/Gallery">Gallery</Link>
			<Link to="/Donate_Us">Donate Us</Link>
			<Link to="/Support_Us">Support Us</Link>
			<Link to="/About_Us">About Us</Link>
			<Link to="/">Home</Link>
			</div>
        )
    }
}
export default Navbar