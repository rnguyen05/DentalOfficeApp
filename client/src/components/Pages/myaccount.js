import React, { Component } from "react";
import { Container } from "reactstrap";
import Home from "../Home";
import MyAccount from "../MyAccount";
import Footer from "../Footer";

class Homepage extends Component {
  render() {
    return (
      <div id="my-account">
        <Home />
        <Container>
          <h2 className="h2 text-center"> My Account </h2>
          <MyAccount />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
