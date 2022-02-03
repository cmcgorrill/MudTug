import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pit from "./pit.js"
import axios from "axios";

class Matchups extends Component {
	constructor(props) {
		super(props);
		this.state = {
			maleQueue: [],
			femaleQueue: [],
			coedQueue: [],
			pits: [],
			teamsRemaining: 0,
		}
	}
	
	componentDidMount() {
		this.fetchTeams();
		this.fetchPits();
	}
	
	fetchTeams = () => {
		console.log("fetch teams")
		axios
			.get("/api/teams/")
			.then((res) => this.filterTeams(res.data))
			.catch((err) => console.log(err));
	};

	fetchPits = () => {
		axios
			.get("/api/pits/")
			.then((res) => {
				this.setState({ pits: res.data});
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	//Queue of teams from each bracket
	filterTeams = (allTeams) => {
		var activeTeams = allTeams.filter((team) => team.team_status === "Active" ).sort(function(a,b){
			return new Date(a.updated_at) - new Date(b.updated_at);
		});
		var maleBracket = activeTeams.filter( (team) => team.bracket_type === "Male");
		var femaleBracket = activeTeams.filter( (team) => team.bracket_type === "Female");
		var coedBracket = activeTeams.filter( (team) => team.bracket_type === "Coed");
		
		console.log(maleBracket.length);
		console.log(femaleBracket.length);
		console.log(coedBracket.length);
		this.setState({ 
			maleQueue: maleBracket, 
			femaleQueue: femaleBracket, 
			coedQueue: coedBracket, 
			teamsRemaining: activeTeams.length
		}); 
	};
	
	
	//One pit for each bracket, Male, Female, Coed
	renderPits = () => {
		return this.state.pits.map(
			(pit) => {
				if(pit.bracket_type === "Male"){
						return <Pit key={this.state.maleQueue[0].id} queue={this.state.maleQueue} pit={pit} refresh={this.fetchTeams}/>
				} else if (pit.bracket_type === "Female"){
						return <Pit key={this.state.femaleQueue[0].id} queue={this.state.femaleQueue} pit={pit} refresh={this.fetchTeams}/>
				} else {
						return <Pit key={this.state.coedQueue[0].id} queue={this.state.coedQueue} pit={pit} refresh={this.fetchTeams}/>
				}
			}
		)
	}
	
	render() {
		return (
			<Container>
				<Row>
					<h4>Teams Remaining: {this.state.teamsRemaining}</h4>
				</Row>
				<Row>
					{this.renderPits()}
				</Row>
			</Container>
		);
	}
}

export default Matchups;