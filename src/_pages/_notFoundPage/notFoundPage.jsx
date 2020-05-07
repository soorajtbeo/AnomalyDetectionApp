import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="py-4 text-center">
        <h2>Page Not Found</h2>
        <br />
        <div>We cannot find the Web Page you requested.</div>
        <br />
        <div className="py-4 text-center">Click <Link to="/"> here</Link> to go to Dashboard</div>
      </div>
    );
  }
}

export default NotFoundPage;
