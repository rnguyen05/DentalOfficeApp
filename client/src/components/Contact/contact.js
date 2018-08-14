import React, { Component } from "react";
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
import Map from "../Map";
import "./contact.css";
import axios from "axios";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
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
    console.log(this.state);
    axios.post("/api/message/new", this.state).then(result => {
      console.log("result sent back from server: ", result);
      if (result.data.errors) {
        return this.setState(result.data);
      }
      return this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
        success: true
      });
    });
  }
  render() {
    return (
      <div className="contact-section" id="id-contact">
        <h2 className="h2 clearfix clear-top text-center">Contact Us</h2>

        <span className="clearfix" />
        <Row>
          <Col className="col-12">
            <Container>
              <Form id="contact-form" onSubmit={this.submitHandler}>
                {this.state.success && (
                  <p className="p">
                    Thank you for contacting us. We will get back to you as soon
                    as we can.
                  </p>
                )}
                <FormGroup>
                  <Label className="label" for="name">
                    First Name & Last Name
                  </Label>
                  <Input
                    type="input"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="label" for="email">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john.doe@gmail.com"
                    required
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="label" for="email">
                    Telephone
                  </Label>
                  <Input
                    type="input"
                    name="phone"
                    id="phone"
                    placeholder="777-999-8888"
                    required
                    value={this.state.phone}
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="label" for="exampleText">
                    Message
                  </Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    rows="7"
                    placeholder="Hello Dentist"
                    value={this.state.message}
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                <Button className="contact" size="lg">
                  Send Message
                </Button>
              </Form>
            </Container>
          </Col>
          <Col className="col-12 text-center">
            <Row>
              <Col className="contact-body">
                <p>
                  12345 Dental Studio Dr. #101 <br />
                  Westwood Village, CA 90024.
                  <br />
                  Tel: (800)888 - 8888
                </p>
              </Col>
              <Col className="contact-body">
                <p>
                  Monday - Friday: 9:00am - 6:00pm
                  <br />
                  Saturday: 10:00am - 5:00pm
                  <br />
                  Sunday: Closed
                </p>
              </Col>
              <Col className="clearfix" />
            </Row>
            <Row>
              <Col>
                <Map />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
