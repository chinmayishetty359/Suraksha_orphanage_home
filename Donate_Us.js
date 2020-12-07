import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style2.css"
class Donate_Us extends React.Component {
    render() {

        return (
			<div class="container">
    <h1 class="header_2">Donate Us</h1>
	<p class="para_2">Fill the following form for donation</p>
	<form action="http://127.0.0.1:5000/Donate_Us" method="POST">
		<table class="table_1">
			<tr>
				<td class="format">
					<label for="name">*Name</label>
				</td>
				<td>
					<input type="text" id="name" name="name" required></input><br></br>
				</td>
			</tr>
			<tr>
				<td class="format">
					<label for="email">*Email</label>
				</td>
				<td>
					<input type="email" id="email" name="mail_id" required></input><br></br>
				</td>
			</tr>
			<tr>
				<td class="format">
					<label for="phon">*Phone No</label>
				</td>
				<td>
					<input type="tel" id="phon" name="phon" pattern="[0-9]{10}" required></input><br></br>
				</td>
			</tr>
			<tr>
				<td class="format">
					<label for="ammount">*Ammount</label>
				</td>
				<td>
					<input type="number" min="500" max="10000" step="500" id="ammount" name="ammount" required></input><br></br>
				</td>
			</tr>
			<tr>
				<td class="format">
					<label for="payment">*Payment:</label>
				</td>
				<td>
					<select name="payment" id="payment" required>
						<option value="Credit Card">Credit Card</option>
						<option value="Debit Card">Debit Card</option>
						<option value="Paytm">Paytm</option>	
						<option value="Other">Other</option>	
					</select>
				</td>
			</tr>
			<tr >
				<td class="format">
					<label for="comment">Add you Opinion:</label>
				</td>
				<td>
					<textarea rows="5" cols="50" name="comment" id="comment"></textarea> 
				</td>
			</tr>
			<tr>
				<td class="format">
					<input type="submit" name="Submit" ></input><br></br>
				</td>
			</tr>
		</table>
	</form>
  </div>
        )
    }
}
export default  Donate_Us