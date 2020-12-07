import React from 'react'
import { Link } from 'react-router-dom' 
import "../css/style4.css" 

class About_Us extends React.Component {
    render() {

        return (
		<div class="container_about">
		<div class="col">
        <h1 >
            ABOUT US
        </h1>
        <h3 style={{"textAlign": "center","fontWeight": "bold", "fontSize":"italic"}}>SURAKSHA ORPHANAGE HOME</h3>
    <div>
        <img src="img/img.jpg" width="100%"/>
    </div>


        <div class="small_div">
        <p>In 2000, Sabina Solomon joined a local orphanage near her home in Shivajinagar, Bangalore as a volunteer. Sabina began by cooking meals for the orphans. Over time, her duties grew to include tutoring the children and searching for steady sources of donor funding.</p>
	<p>In 2006, after her husband’s passing, Sabina decided to dedicate the rest of her life to the orphaned children she had come to love. Along with her own three children, she moved into the orphanage full time and never looked back. In 2010, she assumed a directing role and renamed the orphanage “Suraksha Orphanage Home,” which was a dream of her late husband’s. Since then, Sabina—known affectionately as “Auntie”—has relied on help from her family and volunteers to provide a safe and nurturing environment to all of the children in her care.</p>
	<blockquote><p><em>“Every deserted person, every orphan should know that there is love here. This is a family. The children are treated well, I see them as my children, and they see me as their mother. I am lucky to be with them and to be a part of their lives.” ~ Sabina Solomon</em></p></blockquote>
	<p>Suraksha Orphanage Home receives no government help. Instead, all of its funding comes from individual or corporate sponsors in and around the Bangalore area. However, this flow of funding can be inconsistent, and Suraksha Orphanage Home often requires more funding at certain times of the year. Admission times at schools, festival season like Diwali/Christmas, when kids fall sick&#8230;this is when Sabina can face severe shortages. It is her dream to reduce this uncertainty and secure a steady source of funding.</p>
	<p>Currently, Suraksha Orphanage Home leases its shelter from a private corporation. This property serves as a temporary home to Sabina, a few volunteers, and more than fifty children. Though the lease doesn’t expire until 2020, Sabina knows how fast time passes and is already working hard to arrange a new location and ensure a smooth transition for the entire Suraksha Orphanage Home family.</p>
	<blockquote><p><em>“It is hard for me to save money for a new building. Whatever I save is always spent for a broken appliance or a sick child. Every day, I do the cooking and cleaning and take care of the children and make sure they are happy. But at night, I worry about the lease and what will happen if I cannot find a home.”<em> ~ Sabina Solomon</em></em></p></blockquote>
	<p>Sabina is living by faith. While there are many things she needs, there is so much she already has, so much to be grateful for. For fifty beautiful children, for so much support, for sixteen years of successful service, the Suraksha Orphanage Home story is just getting started.</p>
        </div>

    </div>
	</div>
	
        )
    }
}
export default About_Us