
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import axios from "axios";

class Matchup extends Component {
	static get propTypes() { 
		return { 
			teams: PropTypes.array, 
			refresh: PropTypes.func 
		}; 
	}

	markWinner = (team) => {
		//dosomething to update the team -- count victories?
		let winningTeam = {...team};
		winningTeam.victories += 1;
		axios.put("api/teams/"+winningTeam.id+"/", winningTeam)
			.then(res => console.log(res.data))
			.catch((err) => console.log(err));
		
		//mark the loser
		if(team.id === this.props.teams[0].id){
			this.markLoser(this.props.teams[1]);
		}
		else if(team.id === this.props.teams[1].id){
			this.markLoser(this.props.teams[0]);
		}
	}
	
	markLoser = (team) => {
		team.team_status = "Inactive";
		axios.put("api/teams/"+team.id+"/", team)
			.then(this.props.refresh())
			.catch((err) => console.log(err));
	}
	
	renderMatchup = () => {
		return this.props.teams.map((team) => {
				return (
					<tr key={team.id} className="matchup-team">
					<td>
						{team.name}
					</td>
					<td>
						<Button  variant="outline-success" style={{float: "center"}} onClick={() => this.markWinner(team)}>
							Winner
						</Button>
					</td>
					<td>
						<span style={{ float: "right" }}>
							{team.interpreting_requested ? <FaAmericanSignLanguageInterpreting /> : ''}
						</span>
					</td>
				</tr>
			)
		});
	}
	
	render() {
		return (
			<Table>
				<tbody>
					{this.renderMatchup()}
				</tbody>
			</Table>
		);
	}
}

export default Matchup;