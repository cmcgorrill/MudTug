
import React, { Component } from "react";

class Pit extends Component {
  constructor(props) {
    super(props);
		this.state = {
			name: props.name,
			queue: props.queue,
		}
  }
    
  render() {
    return (
			<div className="col-md-4 col-sm-10 mx-auto p-0">
				<div className="card p-3">
					<div className="mb-4">
						<h3>{this.state.name}</h3>
					</div>
				</div>
				<div className="card p-3">
					<div className="mb-4">
						<h3>{this}</h3>
					</div>
				</div>
			</div>
    );
  }
}

export default Pit;