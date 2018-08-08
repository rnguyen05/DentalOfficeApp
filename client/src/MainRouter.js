import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Services from "./components/Pages/services";
import Contact from "./components/Pages/contact";
import Promotions from "./components/Pages/promotions";
import Appointments from "./components/Pages/appointments";
import Signup from "./components/Pages/signup";

const App = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/promotions" component={Promotions} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  </div>
);

export default App;
