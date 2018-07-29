import React from "react";
import Header from "./Header";
import Appointments from "./BookAppointments";
import Hours from "./Hours";
import Banner from "./Banner";
import Serve from "./Serve";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => (
  <div>
    <Header />
    <Banner />
    <Hours />
    <Team />
    <Appointments />
    <Serve />
    <Testimonials />
    <Footer />
  </div>
);

export default Home;
