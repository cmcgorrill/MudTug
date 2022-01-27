import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios";

class Registration extends Component {
	constructor(props) {
    super(props);
		this.state = {
      validated: false,
		}
  }
	
	validateTeamData = (event) => {
		if (event.target.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    	this.setState({ validated: true });
			return false
    }

    this.setState({ validated: true });
		return true;
	}
	
	handleSubmit = (event) => {
		this.validateTeamData(event);
		
    let form = event.target;
		let teamName = form[0].value;
		let bracket = form[1].value;
		let captainName = form[2].value;
		let captainEmail = form[3].value;
		let interpretingRequested = form[4].value;
		
		let newTeam = {
			name: teamName,
			bracket_type: bracket,
			captain_name: captainName,
			captain_email: captainEmail,
			interpreting_requested: interpretingRequested === true,
		}
		
		console.log(newTeam);
		axios.post("api/teams/", newTeam)
		.then(res => console.log(res.data))
		.catch((err) => console.log(err));

    event.preventDefault();
		
		this.props.history.push('/teams');
		alert(teamName + " added successfully.")
  }
	
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
        	<Col xs={12} md={8}>
						<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
							<Form.Group className="mb-3">
								<Form.Label>Team Name</Form.Label>
								<Form.Control required type="text" placeholder="Team Name" />
								<Form.Control.Feedback type="invalid">
									Please choose a team name.
								</Form.Control.Feedback>
							</Form.Group>
			
							<Form.Group className="mb-3">
								<Form.Label>Bracket</Form.Label>
								<Form.Select>
									<option value="Coed">Coed</option>
									<option value="Male">Men's</option>
									<option value="Female">Women's</option>
								</Form.Select>
								<Form.Text className="error" id="teamNameError">
									Coed teams must have at least 2 members of each gender.
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Captain Name</Form.Label>
								<Form.Control required type="text" placeholder="Captain Name" />
								<Form.Control.Feedback type="invalid">
									Please enter the team captain's name.
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Captain Email</Form.Label>
								<Form.Control required type="email" placeholder="Captain email" />
								<Form.Control.Feedback type="invalid">
									Please enter the team captain's email.
								</Form.Control.Feedback>
							</Form.Group>
			
							<Form.Group className="mb-3">
								<Form.Check type="checkbox" label="Request Interpreting Services" />
							</Form.Group>
			
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
      </Container>
    );
  }
}

export default withRouter(Registration);