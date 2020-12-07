import React from 'react'
import { Link } from 'react-router-dom'
import "../css/home.css"

class Home extends React.Component {
  
  render(){
	  var click =()=> {
		var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
	}
	  
  return ( 
  <div>
	<div class="big">
			<img src="./img/_1.jpg" alt="student" ></img>
			<div class="text-block">
				<h4>Kids</h4>
				<p>Having fun with the Volunteers</p>
				
			</div>
		</div>
		<div class="ram">
		
      <h1>Home</h1>
      <p class="pp">
        There are very few institutions providing residential care and training to the orphan,disabled orphan and special persons (Mentally Challenged, Visually Impaired, Hearing Impaired, Loco motor Impaired). SURAKSHA ORPHAN HOME has been conceived to rehabilitate these special persons.
		This institution was registered and established on 2007 on the occasion of Mother Theresa birthday. The feeling of wanted is imbibed in the residence. There is a gradual transformation in them.Services for children with special health care needs and their families will be organized in ways that families can use them easily.All youth with special health care needs will receive the services necessary to make appropriate transitions to adult health care, work, and independence. 
        Below are the few articles about the orphanage:
      </p>
	  <div class="small_1">
	  
	  <p class="small_2">We need a helping hand: We solicit the cooperation of well wishers and welcome contributions in cash and/or kind, to assist creating a permanent shelter(in form of its own building), and develop related infrastructure like Phsiotherapy equipment, furniture, Vehicle, etc.All children with special health care needs will receive coordinated ongoing comprehensive care within a medical home.All children will be screened early and continuously for special health care needs.
	  If you are willing to support can donate in the donate page.And thanks for showing the intrest to visit our site :)</p>
	
	<div class="acco">
      <button class="accordion" onClick={click}>Orphans of India</button>
      <div class="panel">
        <p>There’s a child, born to parents who have been poor for generations, not allowed to educate themselves or their children, ostracised from main society for centuries. There’s another child, born to some parents</p>
        <a href="https://timesofindia.indiatimes.com/blogs/voices/orphans-of-india/">click here to read the article...</a>
      </div>
      <button class="accordion" onClick={click}>India now home to 20 million orphans</button>
      <div class="panel">
        <p>A new study by an international charity for orphaned and abandoned children found that India is home to 20 million orphans,
           a figure projected to increase by 2021.A new study by an international children’s charity has found that 4 per cent (or 20 million) of India’s child population are orphans. Most of these children have been abandoned by their parents.
           In fact, the charity estimates that only 0.3 per cent of these orphans are children whose parents have actually died.
        </p>
        <a href="https://www.soschildrensvillages.ca/india-now-home-20-million-orphans-study-finds#:~:text=A%20new%20study%20by%20an%20international%20children's%20charity%20has%20found,whose%20parents%20have%20actually%20died.">click here to read the article...</a>
      </div>
      <button class="accordion" onClick={click}>An Earthquake, an Orphanage, and New Beginnings for Haitian Children in America</button>
      <div class="panel">
        <p>After the 2010 earthquake in Haiti, 19 children from one orphanage were flown to the U.S. to be adopted by American families. One would later meet President Trump..</p>
        <a href="https://www.nytimes.com/2020/10/19/world/haiti-adoptions.html">click here to read the article...</a>
      </div>
	  </div>
	  </div>
	 </div>
</div>
  )
}
}
export default Home