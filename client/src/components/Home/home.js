import React from "react";
// import { Container } from "reactstrap";
import "./home.css";
// import Navbar from "../Navbar";
import SideBtns from "../Sidebtns";
import Mission from "../Mission";
import Banner from "../Banner";
import About from "../About";
import Services from "../Services";
import Loyalty from "../LoyaltyProgram";
import ToTop from "../TopBtn";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";

const Home = () => (
  <div>
    <header>
      <Banner />
      <SideBtns />
    </header>
    <section>
      <Mission />
      <About />
      <Services />
      <Loyalty />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
    <ToTop />
  </div>
);

export default Home;
