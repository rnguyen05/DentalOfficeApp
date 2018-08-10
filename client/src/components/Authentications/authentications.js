import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { DropdownItem } from "reactstrap";
import { getJwt } from "../Helpers";

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const jwt = getJwt();
    if (!jwt) {
      this.setState({
        user: null
      });
      return;
    }

    // axios
    //   .get("/getUser", { headers: { Authorization: getJwt() } })
    //   .then(res => {
    //     console.log("getUser", res.data);
    //     this.setState({
    //       user: res.data
    //     });
    //   });
  }

  render() {
    const { user } = this.state;
    if (user === undefined) {
      return (
        <DropdownItem href="#" onClick={this.props.login}>
          <i className="fas fa-sign-in-alt" />
          &nbsp;&nbsp;&nbsp;Login
        </DropdownItem>
      );
    }

    if (user === null) {
      this.props.history.push("/");
    } else {
      return this.props.children;
    }
  }
}

export default withRouter(AuthComponent);
