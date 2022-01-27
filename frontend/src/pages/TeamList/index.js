
import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TeamTable from "./teamTable.js"
import axios from "axios";

class TeamsList extends Component {
	constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }
	
	componentDidMount() {
    this.refreshList('');
  }
	
  refreshList = (keyword) => {
    axios
      .get("/api/teams/")
      .then((res) => {
				let filteredTeams = res.data.filter((team) => team.name.toLowerCase().includes(keyword.toLowerCase()))
				this.setState({ teams: filteredTeams });
				console.log(res.data);
			})
      .catch((err) => console.log(err));
  };
	
  render() {
    return (
      <Container>
        <Row>
          <Col>
						<Form.Control type="text" placeholder="Search by team name" onChange={event => this.refreshList(event.target.value)} value={this.state.keyword}/>
          </Col>
          <Col>
						<button
							className="btn btn-primary"
						>
							Register new team
						</button>
					</Col>
        </Row>
        <Row>
          <Col>
						 <TeamTable teams={this.state.teams} refresh={this.refreshList}/>
					</Col>
				</Row>
      </Container>
    );
  }
}

export default TeamsList;