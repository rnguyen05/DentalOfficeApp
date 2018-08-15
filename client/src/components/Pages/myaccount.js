import React, { Component } from "react";
import { Container } from "reactstrap";
import Home from "../Home";

import Footer from "../Footer";

class Homepage extends Component {
  render() {
    return (
      <div id="my-account">
        <Home />
        <Container>
          <h2 className="h2 text-center"> My Account </h2>
          <p className="p text-center">Client account information goes here </p>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
