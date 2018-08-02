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

export default class Contact extends Component {
  render() {
    return (
      <div className="section-contact  contact-bg">
        <h2 className="contact-title">Contact Us</h2>
        <Row className="clearfix">
          <Row className="col-12">
            <Col className="contact-form-bg">
              <Container className="col-12">
                <Form className="form-font-color">
                  <FormGroup>
                    <Label for="name">First Name & Last Name</Label>
                    <Input type="input" name="name" id="name" required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Telephone</Label>
                    <Input type="input" name="phone" id="phone" required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">Message</Label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      rows="7"
                    />
                  </FormGroup>
                  <Button size="md">Send Message</Button>
                </Form>
              </Container>
            </Col>
            <Col className="col-12 col-md-6">
              <Container className="clearfix">
                <Row>
                  {/* <h2 className="contact-address pt-2">Our Address</h2> */}
                </Row>
                <Row>
                  <Col className="col-12 col-md-6">
                    <p className="contact-body">
                      12345 Dental Studio Dr. #101 <br />
                      Westwood Village, CA 90024.<br />
                      Tel: (800)888 - 8888
                    </p>
                  </Col>
                  <Col className="col-12 col-md-6">
                    <p className="contact-body">
                      Monday - Friday: 9:00am - 6:00pm<br />
                      Saturday: 10:00am - 5:00pm<br />
                      Sunday: Closed
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Map />
                </Row>
              </Container>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}
