import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainRouter from "./MainRouter";
import registerServiceWorker from "./registerServiceWorker";

import "../src/components/Pages/css/linearicons.css";
import "../src/components/Pages/css/font-awesome.min.css";
import "../src/components/Pages/css/bootstrap/bootstrap.css";
import "../src/components/Pages/css/magnific-popup.css";
import "../src/components/Pages/css/nice-select.css";
import "../src/components/Pages/css/animate.min.css";
import "../src/components/Pages/css/jquery-ui.css";
import "../src/components/Pages/css/owl.carousel.css";
import "../src/components/Pages/css/main.css";

ReactDOM.render(<MainRouter />, document.getElementById("root"));
registerServiceWorker();
