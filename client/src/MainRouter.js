import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Services from "./components/Pages/services";
import Appointments from "./components/Pages/appointments";
// import Contact from "./components/Pages/contact";
// import Login from "./components/Pages/login";

const App = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/services" component={Services} />

        {/*
        
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} /> */}
      </div>
    </Router>
  </div>
);

export default App;
