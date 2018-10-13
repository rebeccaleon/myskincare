import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import SkinQuiz from "./components/pages/SkinQuiz";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/skinquiz" component={SkinQuiz} />
    </div>
  </Router>
);

export default App;
