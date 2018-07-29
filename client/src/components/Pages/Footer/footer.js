import React from "react";

const Footer = () => (
  <div>
    {/* <!-- start footer Area --> */}
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-2  col-md-6">
            <div className="single-footer-widget">
              <h6>Top Products</h6>
              <ul className="footer-nav">
                <li>
                  <a href="home">Managed Website</a>
                </li>
                <li>
                  <a href="about">Manage Reputation</a>
                </li>
                <li>
                  <a href="services">Power Tools</a>
                </li>
                <li>
                  <a href="contact">Marketing Service</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-4  col-md-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Our Address</h6>
              <p>
                12345 Dental Studio Blvd. <br />
                Westwood, CA 91234 <br />
                (800) 888 - 8888 <br />
                contact@dentalstudio.com
              </p>
            </div>
          </div>
          <div className="col-lg-6  col-md-12">
            <div className="single-footer-widget newsletter">
              <h6>Newsletter</h6>
              <p>
                You can trust us. We only send promo offers, not a single spam.
              </p>
              <div id="mc_embed_signup">
                <form>
                  <div className="form-group row">
                    <div className="col-lg-8 col-md-12">
                      <input
                        name="EMAIL"
                        placeholder="Your Email Address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Your Email Address '"
                        required=""
                        type="email"
                      />
                    </div>

                    <div className="col-lg-4 col-md-12">
                      <button className="nw-btn primary-btn">
                        Subscribe<span className="lnr lnr-arrow-right" />
                      </button>
                    </div>
                  </div>
                  <div className="info" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer-bottom d-flex justify-content-between">
          <p className="col-lg-8 col-sm-12 footer-text m-0">
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            Copyright &copy; All rights reserved.
          </p>
          <div className="col-lg-4 col-sm-12 footer-social">
            <a href="facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href="twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="behance">
              <i className="fa fa-behance" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    {/* <!-- End footer Area --> */}
  </div>
);

export default Footer;
