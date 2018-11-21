console.log("index.js is running");

import React, { Component } from "react";
import ReactDOM from "react-dom";

class UberEats extends Component {
  render() {
    return (
      <div>
        <h1>Uber Eats Application</h1>
      </div>
    );
  }
}

ReactDOM.render(<UberEats />, document.getElementById("root"));
