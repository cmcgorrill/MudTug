import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

class TeamTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamList: [],
    };
  }
    
  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/teams/")
      .then((res) => {
				this.setState({ teamList: res.data });
				console.log(res.data);
			})
      .catch((err) => console.log(err));
  };

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
					{this.state.teamList.map((team) => (
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
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
}

export default TeamTable;