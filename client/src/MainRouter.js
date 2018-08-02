import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/Pages/about";

const App = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="about" component={About} /> */}
      </div>
    </Router>
  </div>
);

export default App;
