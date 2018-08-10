import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import fb from "../img/logos/facebook.png";
// import gl from "../img/logos/google.png";
// import tw from "../img/logos/twitter.png";
// import fbmb from "../img/logos/facebook-mb.png";
// import glmb from "../img/logos/google-mb.png";
// import twmb from "../img/logos/twitter-mb.png";
import "./modals.css";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Login from "../Login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

//Popup Modal
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
      password: "",
      showPopup: false //MODAL
    };
  }

  handlerUsernameChanged(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlerPasswordChanged(event) {
    this.setState({
      password: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();

    axios
      .post("/api/user/login", this.state.username, this.state.password)
      .then(res => {
        if (res.data.errors) {
          return this.setState(res.data);
        } else {
          localStorage.setItem("jwtAppToken", res.data.token);
          window.location.href = "/";
        }
        return this.setState({
          userdata: res.data,
          errors: null,
          success: true
        });
      });
  }

  isAuthenticated() {
    const token = localStorage.getItem("jwtAppToken");
    return token && token.length > 10;
  }

  responseFacebook = response => {
    localStorage.setItem("jwtAppToken", response.name);
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  //MODAL
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    let fbContent;

    console.log("user state", this.state);
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "200px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h6>{this.state.name}</h6>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="929702273883725"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.props.closePopup}
          callback={this.responseFacebook}
        />
      );
    }

    return (
      <div className="popup">
        <div className="popup_inner text-center">
          {this.state.isLoggedIn ? (
            <div>
              <h6 className="h6-white">Welcome</h6>
              <div className="login-bg">
                <br />
                <div>{fbContent}</div>
                <br />
                <span className="modal-footer">
                  <Button color="danger" onClick={this.props.closePopup}>
                    Close
                  </Button>
                </span>
              </div>
            </div>
          ) : (
            <div>
              <h6 className="h6-white">Please Login</h6>
              <div className="login-bg">
                <br />
                <div>{fbContent}</div>
                <br />
                {/*Custom login form*/}
                <Form
                  className="login-form text-center"
                  onSubmit={this.submitForm.bind(this)}
                >
                  <FormGroup row>
                    <Col>
                      <Label for="UserName">User Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="username"
                        value={this.state.username}
                        placeholder="your-email@email.com"
                        onChange={this.handlerUsernameChanged.bind(this)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Label for="Password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        placeholder="Enter Password"
                        onChange={this.handlerPasswordChanged.bind(this)}
                      />
                    </Col>
                  </FormGroup>
                  <Button>Submit</Button>
                </Form>
                <span className="modal-footer">
                  <a
                    className="signup"
                    href="/signup#user-reg"
                    onClick={this.props.closePopup}
                  >
                    Register
                  </a>
                  <Button color="danger" onClick={this.props.closePopup}>
                    Close
                  </Button>
                </span>
              </div>
            </div>
          )}
        </div>
        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
//End Popup Modal
export default Popup;
