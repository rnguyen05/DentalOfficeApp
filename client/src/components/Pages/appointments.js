import React from "react";
import Header from "./Header";
import BookAppointments from "./BookAppointments";
import Team from "./Team";
import Serve from "./Serve";
import Footer from "./Footer";

const Appointments = () => (
  <div>
    <Header />
    <BookAppointments />
    <Serve />
    <Team />
    <Footer />
  </div>
);

export default Appointments;
