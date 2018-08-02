import React from "react";
import { Button } from "reactstrap";

const Loyalty = () => {
  return (
    <div className="loyalty-section">
      <div className="container">
        <div className="col-12 loyalty">
          <h2 className="h2-title">Our Loyalty Program</h2>
          <p>
            Dental Studio is a general dental practice that provides a full
            range of dental services, <br />allowing us to make minimal
            referrals to specialists. We have developed our Patient Loyalty
            program <br />with our uninsured patients in mind. <br />It is
            designed to make affordable quality dental care more obtainable to
            those without insurance.
          </p>
          <ul>
            <li>2 Cleanings Per Year (2 per benefit year) </li>
            <li>Additional Cleanings as Prescribed at a 50% discount.</li>
            <li>Fluoride Treatment </li>
            <li>X-Rays as Needed </li>
            <li>Examinations (2 per benefit year)</li>
            <li>One Emergency Exam (if necessary) </li>
            <li>20% off all other dental services provided in our office.</li>
          </ul>

          <p>
            <Button href="#" className="contact" color="secondary" size="md">
              Sign Up Now
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;
