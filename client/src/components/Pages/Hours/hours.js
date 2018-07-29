import React from "react";

const Hours = () => (
  <div>
    {/* <!-- Start open-hour Area --> */}
    <section className="open-hour-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 open-hour-wrap">
            <h1>Opening Hours</h1>
            <p>Get ready to cast your vote and select the right one</p>
            <a className="open-btn" href="contact">
              <span className="circle" />We are open Now
            </a>
            <div className="date-list d-flex flex-row justify-content-center">
              <ul className="colm-1">
                <li>Monday - Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
              <ul className="colm-2">
                <li>
                  <span>:</span> 10:00am - 05:00pm
                </li>
                <li>
                  <span>:</span> 12:00am - 03:00pm
                </li>
                <li>
                  <span>:</span> By Appointment Only.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
    {/* <!-- End open-hour Area --> */}
  </div>
);

export default Hours;
