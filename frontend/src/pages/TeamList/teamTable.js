import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

class TeamTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }
	
	teamCheckIn = (team) => {
		team.team_status = "Active";
		axios.put("api/teams/"+team.id+"/", team)
			.then(res => this.props.refresh(''))
			.catch((err) => console.log(err));
	}

	render() {
		return (
				<Table
				responsive
			>
				<thead>
					<tr>
						<th>
							Team Name
						</th>
						<th>
							Bracket
						</th>
						<th>
							Captain
						</th>
						<th>
							Interpreting Requested
						</th>
						<th>
							Status
						</th>
					</tr>
				</thead>
				<tbody>
					{this.props.teams.map((team) => (
						<tr
							key={team.id}
						>
								<td>
									{team.name}
								</td>
								<td>
									{team.bracket_type}
								</td>
								<td>
									{team.captain_name}
								</td>
								<td>
									{team.interpreting_requested ? 'YES' : ''}
								</td>
								<td>
									{team.team_status}
								</td>
								<td>
									{team.team_status === "Registered" ? (
        						<Button onClick={() => this.teamCheckIn(team)}>Check In</Button>
      						) : ""}						
								</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
}

export default TeamTable;