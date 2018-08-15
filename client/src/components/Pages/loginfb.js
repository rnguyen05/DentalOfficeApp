import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    console.log("this.state", this.state);

    axios.get("/api/user/login/facebook", this.state).then(result => {
      console.log("result sent back from server: ", result);
      if (result.data.errors) {
        return this.setState(result.data);
      } else {
        localStorage.setItem("jwtAppToken", result.data.token);
        window.location.href = "/";
      }
      return this.setState({
        userdata: result.data,
        errors: null,
        success: true
      });
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="929702273883725"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
