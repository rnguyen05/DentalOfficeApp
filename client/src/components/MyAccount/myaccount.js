import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import axios from "axios";
import "./myaccount.css";

export default class MyAccount extends Component {
  render() {
    return (
      <div className="my-account">
        <Container>
          <Container className="line text-center" />
          <Row className="account-header">
            <Col className="col-12 col-md-6">
              <Card>
                <CardBody>
                  <CardTitle className="my-header">My Profile</CardTitle>
                  <CardText>
                    <Row>
                      <Col className="col-4 p-text">Name:</Col>
                      <Col className="p-text">Demo Demo </Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col className="col-4 p-text">Address:</Col>
                      <Col className="p-text">
                        12345 Wilshire Blvd. Westwood, CA 91234
                      </Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col className="col-4 p-text">Phone:</Col>
                      <Col className="p-text">(213)777 - 8888 </Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col className="col-4 p-text">Email:</Col>
                      <Col className="p-text">demo@gmail.com</Col>
                    </Row>
                  </CardText>
                  <Button color="warning">Update</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-12 col-md-6">
              <Card>
                <CardBody>
                  <CardTitle className="my-header">My Appointments</CardTitle>

                  <CardText>
                    <Row>
                      <Col className="col-4 p-text">Date:</Col>
                      <Col className="p-text">08/17/2018 </Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col className="col-4 p-text">Time:</Col>
                      <Col className="p-text">2:30PM</Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col className="col-4 p-text">Status:</Col>
                      <Col className="p-text">Open</Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col className="col-4 p-text">Reason:</Col>
                      <Col className="p-text">Cleaning</Col>
                    </Row>
                  </CardText>
                  <Row>
                    <Col>
                      <Button color="primary">Confirm</Button>
                    </Col>
                    <Col>
                      <Button color="warning">Update</Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="space" />
          <Row className="account-header">
            <Col className="col-12 col-md-6">
              <Card>
                <CardBody>
                  <CardTitle className="my-header">My Messages</CardTitle>
                  <CardText>
                    <Row>
                      <Col className="col-3 p-text">Date:</Col>
                      <Col className="p-text">08/10/2018</Col>
                    </Row>
                    <Row>
                      <Col className="col-3 p-text">Note:</Col>
                      <Col className="p-text">
                        Please arrive 30 minutes prior to appointment time.
                        Thank you!
                      </Col>
                    </Row>
                    <Col className="line" />
                  </CardText>
                  <Button>View More...</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-12 col-md-6">
              <Card>
                <CardBody>
                  <CardTitle className="my-header">My Treatments</CardTitle>
                  <CardText>
                    <Row>
                      <Col className="col-3 col-md-6 p-text">Date:</Col>
                      <Col className="p-text">02/10/2018</Col>
                    </Row>
                    <Row>
                      <Col className="col-3 col-md-6  p-text">Note:</Col>
                      <Col className="p-text">Deep cleaned.</Col>
                    </Row>
                    <Col className="line" />
                    <Row>
                      <Col className="col-3 col-md-6  p-text">Date:</Col>
                      <Col className="p-text">11/10/2017</Col>
                    </Row>
                    <Row>
                      <Col className="col-3 col-md-6  p-text">Note:</Col>
                      <Col className="p-text">
                        Upper left wisdom tooth removed.
                      </Col>
                    </Row>
                    <Col className="line" />
                    <Row>
                      <Col className="col-3 col-md-6  p-text">Date:</Col>
                      <Col className="p-text">05/20/2017</Col>
                    </Row>
                    <Row>
                      <Col className="col-3 col-md-6  p-text">Note:</Col>
                      <Col className="p-text">
                        X-ray, clean and filled cavities.
                      </Col>
                    </Row>
                    <Col className="line" />
                  </CardText>
                  <Button>View More...</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// import axios from "axios";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button
// } from "reactstrap";

// class MyAccount extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div id="my-account">
//         <Container>
//           <Row className="account-header">
//             <Col className="col-12 col-md-3">
//               <h6 className="h6 text-center">My Profile</h6>
//             </Col>
//             <Col className="col-12 col-md-3">
//               <h6 className="h6 text-center">My Appointments</h6>
//             </Col>
//             <Col className="col-12 col-md-3">
//               <h6 className="h6 text-center">My Messages</h6>
//             </Col>
//             <Col className="col-12 col-md-3">
//               <h6 className="h6 text-center">My Treatments</h6>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default MyAccount;
