import React from 'react';
import { Link } from 'react-router-dom'
import "../css/style1.css"
class Support_Us extends React.Component {
    render() {
        return (
	<div class="container">
    <h1 class="header_1">Support Us</h1>
	<p class="para">If you are willing to come visit our kids and spend some time with them fill the table given below and you will get a mail on further details.</p>
	<form action="http://127.0.0.1:5000/Support_Us" method="POST">
	<div >
		<table class="container_1" >
			<tr>
				<td class="format_1">
					<label for="name">*Name</label>
				</td>
				<td>
					<input type="text" id="name" name="name" required></input><br></br>
				</td>
			</tr>
			<tr>
				<td class="format_1">
					<label for="email">*Email</label>
				</td>
				<td>
					<input type="email" id="email" name="mail_id"   required></input><br></br>
				</td>
			</tr>
			<tr >
				<td class="format_1">
					<label for="date_v">*Date of Visit:</label>
				</td>
				<td>
					<input type="date" id="date_v" name="date_v"  required></input>
				</td>
			</tr>
			<tr>
				<td class="format_1">
					<label for="age">Age</label>
				</td>
				<td>
					<input type="number" id="age" name="age"></input><br></br>
				</td>
			</tr>
			<tr>
				<td class="format_1">
					<label for="mem">*No.of Members</label>
				</td>
				<td>
					<input type="number" id="mem" name="no_of_mem" required></input><br></br>
				</td>
			</tr>
			<tr>
				<td class="format_1">
					<label for="occu">*Which option descrides your current role</label>
				</td>
				<td>
					<select name="occu" id="occu" required>
						<option value="student">Student</option>
						<option value="employe">Employe</option>
						<option value="teacher">Teacher</option>
						<option value="others">Others</option>						
					</select>
				</td>
			</tr>
			<tr>
				<td class="format_1">
					<label for="activity">*You are visiting for: </label>
				</td>
				<td>
					<select name="activity" id="activity"  required>
						<option value="Teaching">Teaching</option>
						<option value="Volunteering">Volunteering</option>
						<option value="Donation">Donation</option>
						<option value="Other">Other Activities</option>						
					</select>
				</td>
			</tr>
			<tr>
				<td class="u_1">
					<label for="recommend">How likely is that you would recommend a freind</label>
				</td>
				<td>
					<div id="recommend">
						<div>
							<input type="radio" id="sure" name="opinion" ></input>
							<label for="sure">Definitely</label><br></br>
						</div>
						<div>
							<input type="radio" id="maybe" name="opinion"></input>
							<label for="maybe">Maybe Not</label><br></br>
						</div>
						<div>
							<input type="radio" id="no" name="opinion" ></input>
							<label for="no">Not Sure</label>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="format_1">
					<label for="topic">*From Where did you find about SOH</label>
				</td>
				<td>
					<select name="topic" id="topic"  required>
						<option value="tv_ad">Tv</option>
						<option value="online">Online</option>
						<option value="frnds">Through Friends</option>
						<option value="news">News Article</option>
						<option value="other">Others</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="format_1">
					<input class="button" type="submit" name="submit" ></input><br></br>
				</td>
			</tr>
		</table>
		</div>
	</form>
  </div>
        )
    }
}

export default Support_Us