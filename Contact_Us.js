import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style3.css"
class Contact_Us extends React.Component {
    render() {

        return (
<div class="con">
	<div class="container3">
  <form action="http://127.0.0.1:5000/Contact_Us" method="POST">
  <h1 class="h4_c">CONTACT US</h1>
     

    <label for="name" class="h4_c">Your Name</label>
    <input type="text" id="name" name="name" placeholder="Your name.."  class ="format_co" required/><br></br>

    <label for="mail" class="h4_c">Email</label>
    <input type="text" id="mail" name="mail" placeholder="Your email id..." class ="format_co" required/><br></br>

    <label for="message" class="h4_c">Message</label>
    <textarea id="message" name="message" class ="format_co" placeholder="Write something.." ></textarea><br></br>

    <input  class ="rat" type="submit" value="Submit"/>
    
  </form>
</div>
<div class="map">
  <h3 class="h4_c">Location</h3>
  <p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62215.05786134254!2d77.50401137910153!3d12.943601100000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f1b460164c3%3A0xe47b983a102c9e2f!2sSuraksha%20Educational%20and%20Charitable%20Trust!5e0!3m2!1sen!2ssg!4v1607184469636!5m2!1sen!2ssg" frameborder="0" allowfullscreen=""  ariaHidden="false" tabindex="0"></iframe>
  </p>
  <h4 class="h4_c">
    Phone number: 9004243586
  </h4>
  <h4 class="h4_c">Email id: suraksha_home@gmail.com</h4>
  
</div>
</div>
        )
    }
}
export default  Contact_Us