import React from "react";

const Header = () => (
  <div>
    <header id="header">
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
              <a href="/">
                <img src={"./img/logo.png"} alt="logo" />
              </a>
            </div>
            <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
              <a className="btns" href="tel:(800) 888 - 8888">
                (800) 888 - 8888
              </a>
              <a className="btns" href="mailto:contact@dentalstudio.com">
                contact@dentalstudio.com
              </a>
              <a className="icons" href="tel:(800) 888 - 8888">
                <span className="lnr lnr-phone-handset" />
              </a>
              <a className="icons" href="mailto:contact@dentalstudio.com">
                <span className="lnr lnr-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="services">Services</a>
              </li>
              <li>
                <a href="appointments">Appointments</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
              <li>
                <a href="directions">Directions</a>
              </li>
              <li>
                <a href="login">Login</a>
              </li>
            </ul>
          </nav>
          <div className="menu-social-icons">
            <a href="facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href="twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="Yelp">
              <i className="fa fa-dribbble" />
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
