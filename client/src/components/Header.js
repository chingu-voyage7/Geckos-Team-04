import React, { Component } from "react";

class Header extends Component {
  handleFindFood(e) {
    e.preventDefault();
    console.log("aa");
  }
  render() {
    return (
      <div>
        <p>UberEats</p>
        <form onSubmit={this.handleFindFood}>
          <input type="text" placeholder="Enter your delivery address" />
          <button>Find food</button>
        </form>
        <span>
          <button>Sign In</button>
        </span>
      </div>
    );
  }
}

export default Header;
