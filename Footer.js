import React from 'react'
import { Link } from 'react-router-dom'
import "../css/footer.css"

export default class Home extends React.Component {
    render() {
        return (
            <div class="foo">
                <h3>Follow us:</h3>
                <div>
                    <a class="social-button facebook" href="https://www.facebook.com/" target="_blank">Facebook</a>
                    <a class="social-button twitter" href="https://twitter.com/home" target="_blank">twitter</a>
                    <a class="social-button instagram" href="https://www.instagram.com" target="_blank">Instagram</a>
                </div>
				<h4>©PES University</h4>
       </div>
        )
    }
}