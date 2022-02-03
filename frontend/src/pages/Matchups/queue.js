
import React, { Component } from "react";
import PropTypes from 'prop-types';
import ListGroup  from "react-bootstrap/ListGroup";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";

class Queue extends Component {
	constructor(props) {
		super(props);
		this.state = {
			queue: props.queue,
		}
	}

	static get propTypes() { 
		return { 
			queue: PropTypes.object,
		}; 
	}
	
	renderItems = () => {
		let queue = [...this.state.queue];
		return queue.map((team) => (
			<ListGroup.Item key={team.id}>
				<span>
					{team.name}
				</span>
				<span style={{ float: "right" }}>
					{team.interpreting_requested ? <FaAmericanSignLanguageInterpreting /> : ''}
				</span>
			</ListGroup.Item>
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