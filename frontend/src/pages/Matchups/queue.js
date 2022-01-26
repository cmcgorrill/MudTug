
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";

class Queue extends Component {
  constructor(props) {
    super(props);
		this.state = {
			queue: props.queue,
		}
  }
	
	renderItems = () => {
		let queue = [...this.state.queue];
		return queue.map((team) => (
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
			<ListGroup>
			 {this.renderItems()}
			</ListGroup>
    );
  }
}

export default Queue;