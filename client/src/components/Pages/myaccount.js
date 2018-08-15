import React, { Component } from "react";
import Home from "../Home";

import Footer from "../Footer";

class Homepage extends Component {
  render() {
    return (
      <div id="my-account">
        <Home />
        <h2 className="h2 text-center"> My Account </h2>
        <p className="p">Client account information goes here </p>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
