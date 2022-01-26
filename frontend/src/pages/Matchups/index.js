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
			pits: [],
		}
  }
	
	componentDidMount() {
    this.fetchTeams();
    this.fetchPits();
  }
	
	fetchTeams = () => {
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
		this.setState({ allTeams: allTeams });
		var activeTeams = allTeams.filter( (team) => team.team_status === "Active" );
		//var activeTeams = allTeams;
		var maleBracket = activeTeams.filter( (team) => team.bracket_type === "Male");
		var femaleBracket = activeTeams.filter( (team) => team.bracket_type === "Female");
		var coedBracket = activeTeams.filter( (team) => team.bracket_type === "Coed");
		
		//sort by time made active
		this.setState({ maleQueue: maleBracket }); 
		this.setState({ femaleQueue: femaleBracket }); 
		this.setState({ coedQueue: coedBracket }); 
		
		console.log(this.state.maleQueue);
		console.log(this.state.femaleQueue);
		console.log(this.state.coedQueue);
	};
	
	
	//One pit for each bracket, Male, Female, Coed
	renderPits = (pits) => {
		return this.state.pits.map(
			(pit) => {
				if(pit.bracket_type === "Male"){
						return <Pit key={pit.id} queue={this.state.maleQueue} pit={pit}/>
				} else if (pit.bracket_type === "Female"){
						return <Pit key={pit.id} queue={this.state.femaleQueue} pit={pit}/>
				} else if (pit.bracket_type === "Coed") {
          return <Pit key={pit.id} queue={this.state.coedQueue} pit={pit}/>
				}
			}
		)
	}
	
  render() {
    return (
      <main className="container">
        <div className="row">
					{this.renderPits()}
        </div>
      </main>
    );
  }
}

export default Matchups;