import React from "react";
import { Button } from "reactstrap";
import "./sidebtns.css";

export default class Sidebtns extends React.Component {
  render() {
    return (
      <div className="appoint">
        <Button
          className="sidebtn"
          color="secondary"
          size="lg"
          href="appointments"
        >
          Make an <br />Appointment
        </Button>
        <br />
        <Button
          className="sidebtn"
          color="secondary"
          size="lg"
          href="newpatient"
        >
          New Patient <br />Special
        </Button>
        <br />
        <Button className="sidebtn" color="secondary" size="lg" href="payment">
          Make a <br />Payment
        </Button>
      </div>
    );
  }
}
