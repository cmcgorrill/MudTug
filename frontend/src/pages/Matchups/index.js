import React, { Component } from "react";
import Pit from "./pit.js"
import axios from "axios";

class Matchups extends Component {
  constructor(props) {
    super(props);
		this.state = {
      allTeams: [],
      maleQueue: [],
      femaleQueue: [],
      coedQueue: [],
		}
  }
	
	fetchTeams = () => {
    axios
      .get("/api/teams/")
      .then((res) => this.filterTeams(res.data))
      .catch((err) => console.log(err));
  };

	//Queue of teams from each bracket
	filterTeams = (allTeams) => {
		this.setState({ allTeams: allTeams });
		var activeTeams = allTeams.filter( (team) => team.team_status === "Active" );
		var maleBracket = activeTeams.filter( (team) => team.bracket_type === "Male");
		var femaleBracket = activeTeams.filter( (team) => team.bracket_type === "Female");
		var coedBracket = activeTeams.filter( (team) => team.bracket_type === "Coed");
		
		//sort by time made active
		this.setState({ maleQueue: maleBracket }); 
		this.setState({ femaleQueue: femaleBracket }); 
		this.setState({ coedQueue: coedBracket }); 
	};
	
	
	//One pit for each bracket, Male, Female, Coed
	
  render() {
    return (
      <main className="container">
        <div className="row">
          <Pit queue={this.state.maleQueue} name="Men"/>
          <Pit queue={this.state.femaleQueue} name="Women"/>
          <Pit queue={this.state.coedQueue} name="Coed"/>
        </div>
      </main>
    );
  }
}

export default Matchups;