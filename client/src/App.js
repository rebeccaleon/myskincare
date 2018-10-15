import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import SkinQuiz from "./components/pages/SkinQuiz";
import Nav from "./components/utils/Nav";

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/skinquiz" component={SkinQuiz} />
      </Switch>
    </div>
  </Router>
);

export default App;
