
import React, { Component } from "react";
import TeamTable from "./teamTable.js"

class TeamsList extends Component {
  constructor(props) {
    super(props);
  }
    
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
               <TeamTable />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default TeamsList;