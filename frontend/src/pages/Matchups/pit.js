
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import Queue from "./queue.js"

class Pit extends Component {
  constructor(props) {
    super(props);
		this.state = {
			pit: props.pit,
			matchedTeams: props.queue.slice(0,2), //first two off the queue
			queue: props.queue.slice(2), //the rest of the queue
		}
  }
	
	renderMatchup = () => {
		return this.state.matchedTeams.map((team) => (
				<ListGroupItem key={team.id}>
					<span>
						{team.name}
					</span>
					<span style={{ float: "right" }}>
						{team.interpreting_requested ? <FaAmericanSignLanguageInterpreting /> : ''}
					</span>
				</ListGroupItem>
			));
	}
	
  render() {
    return (
			<div className="col-md-4 col-sm-10 mx-auto p-0">
				<div className="card pits-card p-3">
					<div className="mb-4">
						<h3>{this.state.pit.name}</h3>
						<ListGroup>
							{this.renderMatchup()}
						</ListGroup>
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