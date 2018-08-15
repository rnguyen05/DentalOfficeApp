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
import "./appointments.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
      appointmentDate: moment(),
      success: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(date) {
    this.setState({
      appointmentDate: date
    });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    let appointmentDateConverted = this.state.appointmentDate._d.toString();

    this.state = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      reason: this.state.reason,
      appointmentDate: appointmentDateConverted,
      success: false
    };
    console.log("appointment_Date", this.state);
    axios.post("/api/appointment/new", this.state).then(result => {
      console.log("result sent back from server: ", result);
      if (result.data.errors) {
        return this.setState(result.data);
      }
      return this.setState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
        appointmentDate: moment(),
        success: true
      });
    });
  }
  render() {
    return (
      <div className="appointment-section" id="id-appointments">
        <h2 className="h2 clearfix clear-top text-center">
          Request an Appointment
        </h2>

        <span className="clearfix" />
        <Row>
          <Col className="col-12">
            <Container>
              <Form id="appointment-form" onSubmit={this.submitHandler}>
                {this.state.success ? (
                  <p className="p text-center">
                    Thank you for your request an appointment with us. We will
                    contact you to confirm your appointment.
                  </p>
                ) : (
                  <div>
                    <Row>
                      <Col>
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
                      </Col>
                      <Col>
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
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label className="label" for="email">
                            Phone Number
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
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label className="label" for="datetime">
                            Appointment Date and Time
                          </Label>
                          <DatePicker
                            className="form-control"
                            selected={this.state.appointmentDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            dateFormat="LLL"
                            timeCaption="time"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label className="label" for="appointmentreason">
                            Reason for Appointment
                          </Label>
                          <br />
                          <select
                            className="dropdown-list label form-control"
                            id="reason"
                            name="reason"
                            onChange={this.changeHandler}
                          >
                            <option value="">Select a Reason</option>
                            <option value="New Patient">New Patient</option>
                            <option value="Signup Loyalty Program">
                              Signup Loyalty Program
                            </option>
                            <option value="Preventative Dentistry">
                              Preventative Dentistry
                            </option>
                            <option value="Costmetic Dentistry">
                              Costmetic Dentistry
                            </option>
                            <option value="Clear Orth Aligners">
                              Clear Orth Aligners
                            </option>
                            <option value="Implants">Implants</option>
                            <option value="Sedation/Anesthesia">
                              Sedation/Anesthesia
                            </option>
                            <option value="Same Day Crowns">
                              Same Day Crowns
                            </option>
                            <option value="Oral Surgery">Oral Surgery</option>
                            <option value="Root Canals">Root Canals</option>
                            <option value="Wisdom Teeth Removal">
                              Wisdom Teeth Removal
                            </option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label className="label" for="exampleText">
                        Message
                      </Label>
                      <Input
                        type="textarea"
                        name="message"
                        id="message"
                        rows="7"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <Button className="contact" size="lg">
                      Request Appointment
                    </Button>
                  </div>
                )}
              </Form>
            </Container>
          </Col>

          <Col className="clearfix" />
        </Row>
      </div>
    );
  }
}
