import React, { Component } from "react";

const teams = [
    {
        id: 1,
        name: "A Team",
        captainName: "Alan",
        bracket: "Male",
    },
    {
        id: 2,
        name: "B Team",
        captainName: "Betty",
        bracket: "Female",
    },
    {
        id: 3,
        name: "C Team",
        captainName: "Connor",
        bracket: "Coed",
    },
    {
        id: 4,
        name: "D Team",
        captainName: "Danielle",
        bracket: "Coed",
    },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      teamList: teams,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderItems = () => {
    const { viewCompleted } = this.state;

    return this.state.teamList.map((team) => (
      <li
        key={team.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>{team.name}</span>
        <span>
          <button
            className="btn btn-secondary mr-2"
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                >
                  Add team
                </button>
              </div>
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;