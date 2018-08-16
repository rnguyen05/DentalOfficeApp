import React from "react";
import { Container, Button } from "reactstrap";
import "./loyalty.css";

const Loyalty = () => {
  return (
    <div className="row section-loyalty">
      <Container>
        <h2 className="h2 clearfix text-center">Our Loyalty Program</h2>
        <p className="p loyalty-content">
          Dental Studio is a general dental practice that provides a full range
          of dental services, allowing us to make minimal referrals to
          specialists. We have developed our Patient Loyalty program with our
          uninsured patients in mind. It is designed to make affordable quality
          dental care more obtainable to those without insurance.
          <ul className=" ul loyalty-content">
            <li className="li">
              &bull;&nbsp;&nbsp;2 Cleanings Per Year (2 per benefit year)
            </li>
            <li className="li">
              &bull;&nbsp;&nbsp;Additional Cleanings as Prescribed at a 50%
              discount.
            </li>
            <li className="li">&bull;&nbsp;&nbsp;Fluoride Treatment </li>
            <li className="li">&bull;&nbsp;&nbsp;X-Rays as Needed </li>
            <li className="li">
              &bull;&nbsp;&nbsp;Examinations (2 per benefit year)
            </li>
            <li className="li">
              &bull;&nbsp;&nbsp;One Emergency Exam (if necessary){" "}
            </li>
            <li className="li">
              &bull;&nbsp;&nbsp;20% off all other dental services provided in
              our office.
            </li>
          </ul>
        </p>
        <p className="p loyaltyBtn">
          <Button
            className="promo-button"
            href="appointments#id-appointments"
            color="secondary"
            size="md"
          >
            Sign Up Now
          </Button>
          <span className="li">&nbsp;&nbsp;OR&nbsp;&nbsp;</span>
          <Button
            href="tel:8008888888"
            className="promo-button"
            color="secondary"
            size="md"
          >
            Call Us Today
          </Button>
        </p>
      </Container>
    </div>
  );
};

export default Loyalty;
