
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Queue from "./queue.js"
import Matchup from "./matchup.js"

class Pit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pit: props.pit,
			matchedTeams: props.queue.slice(0,2), //first two off the queue
			queue: props.queue.slice(2), //the rest of the queue
		}
	}

	static get propTypes() { 
		return { 
			pit: PropTypes.array, 
			queue: PropTypes.object,
			refresh: PropTypes.func
		}; 
	}
	
	render() {
		return (
			<div className="col-md-4 col-sm-10 mx-auto p-0">
				<div className="card pits-card p-3">
					<div className="mb-4">
						<h3>{this.state.pit.name}</h3>
						<Matchup teams={this.state.matchedTeams} refresh={this.props.refresh}/>
					</div>
				</div>
				<div>
					<Queue queue={this.state.queue}/>
				</div>
			</div>
		);
	}
}

export default Pit;