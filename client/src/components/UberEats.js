import React, { Component } from "react";
import Header from "./Header";
import AppDownload from "./AppDownload";

class UberEats extends Component {
  render() {
    return (
      <div>
        <h1>Uber Eats Application</h1>
        <Header />
        <AppDownload />
      </div>
    );
  }
}

export default UberEats;
