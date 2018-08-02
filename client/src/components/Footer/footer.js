import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20 footer-title">Our Address</h6>
                <p className="footer-address">
                  12345 Dental Studio Dr. #101 <br />
                  Westwood Village, CA 90024<br />
                  <a className="footer-address" href="tel:8008888888">
                    Tel: (800)888 - 8888
                  </a>
                  <br />
                  <a
                    className="footer-address"
                    href="mailto:hello@dentalstudio.com"
                  >
                    Email: hello@dentalstudio.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20 footer-title">Business Hours</h6>
                <p className="footer-address">
                  Monday - Friday:9:00am - 6:00pm <br />
                  Saturday: 10:00am - 5:00pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20 footer-title">Connect with Us</h6>
                <p>
                  <a href="facebook.com">
                    <i className="fab fa-facebook-square fa-4x mr-2" />
                  </a>
                  <a href="twitter.com">
                    <i className="fab fa-twitter-square fa-4x mr-2" />
                  </a>
                  <a href="google.com">
                    <i className="fab fa-google-plus-square fa-4x mr-2" />
                  </a>
                  <a href="linkedin.com">
                    <i className="fab fa-linkedin fa-4x mr-2" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
