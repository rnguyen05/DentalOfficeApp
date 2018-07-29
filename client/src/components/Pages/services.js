import React from "react";
import Header from "./Header";
import Team from "./Team";
import Serve from "./Serve";
import Footer from "./Footer";

const Services = () => (
  <div>
    <Header />
    {/* <!-- start banner Area --> */}
    <section className="banner-area relative about-banner" id="home">
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="about-content col-lg-12">
            <h1 className="text-white">Services</h1>
            <p className="text-white link-nav">
              <a href="/">Home </a> <span className="lnr lnr-arrow-right" />{" "}
              <a href="services"> Services</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End banner Area --> */}
    <Serve />
    <Team />
    <Footer />
  </div>
);

export default Services;
