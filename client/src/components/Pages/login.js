import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
// import FacebookLogin from "react-facebook-login";
import Navbar from "../Navbar";
import Footer from "../Footer";

import Fb from "../img/logos/facebook.png";
import Gg from "../img/logos/google.png";
import Tw from "../img/logos/twitter.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userdata: null,
      success: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios.post("/api/user/login", this.state).then(result => {
      console.log("result sent back from server: ", result);
      if (result.data.errors) {
        return this.setState(result.data);
      } else {
        localStorage.setItem("jwtAppToken", result.data.token);
        window.location.href = "/myaccount";
      }
      return this.setState({
        userdata: result.data,
        errors: null,
        success: true
      });
    });
  }
  //Facebook login

  render() {
    return (
      <div id="id-login">
        <Navbar />
        <Row className="login-bg">
          <Container>
            <h2 className="h2-white clearfix clear-top text-center">
              User Login
            </h2>
            <br />
            {this.state.success && <p>Welcome!</p>}
            <Container id="login-form">
              <Col className="col-12">
                <Container>
                  <Col className="col-12 text-center">
                    <a href="/loginfb">
                      {<img className="login-logo" src={Fb} alt="Facebook" />}
                    </a>
                    <br />
                    <a href="#">
                      {<img className="login-logo" src={Gg} alt="Google" />}
                    </a>
                    <br />
                    <a href="#">
                      {<img className="login-logo" src={Tw} alt="Twitter" />}
                    </a>
                    <br />
                  </Col>
                  <Form onSubmit={this.submitHandler}>
                    <Row>
                      <Col className="col-12">
                        <FormGroup>
                          <Label className="label" for="repeatemail">
                            Email (For demo: email is demo@gmail.com)
                          </Label>
                          <Input
                            className="label"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email@email.com"
                            required
                            onChange={this.changeHandler}
                          />
                          {this.state.errors &&
                            this.state.errors.email && (
                              <p>{this.state.errors.email.msg}</p>
                            )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12">
                        <FormGroup>
                          <Label className="label" for="password">
                            Password (For demo: password is "demo")
                          </Label>
                          <Input
                            className="label"
                            type="password"
                            name="password"
                            id="passwordreg"
                            placeholder="password"
                            required
                            onChange={this.changeHandler}
                          />
                          {this.state.errors &&
                            this.state.errors.password && (
                              <p>{this.state.errors.password.msg}</p>
                            )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button className="contact" size="lg">
                      Login
                    </Button>
                    <Link className="label" to="/signup#id-signup">
                      Signup
                    </Link>
                  </Form>
                </Container>
              </Col>
            </Container>
            <Footer />
          </Container>
        </Row>
      </div>
    );
  }
}

export default Signup;
