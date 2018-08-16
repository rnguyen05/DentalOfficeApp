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
        <div className="clear-top" />
        <h2 className="h2 text-center">Contact Us</h2>

        <Row>
          <Col className="col-12">
            <Container>
              <Form id="contact-form" onSubmit={this.submitHandler}>
                {this.state.success ? (
                  <p className="p text-center">
                    Thank you for contacting us. We will get back to you as soon
                    as we can.
                  </p>
                ) : (
                  <div>
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
                    <Button className="contact" size="sm">
                      Send Message
                    </Button>
                  </div>
                )}
              </Form>
            </Container>
            <Map />
          </Col>

          <Row />
        </Row>
      </div>
    );
  }
}
