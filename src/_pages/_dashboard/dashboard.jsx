import React, { Component } from "react";
import MachineList from "../_machineList/machineList";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <MachineList />
      </React.Fragment>
    );
  }
}

export default Dashboard;
