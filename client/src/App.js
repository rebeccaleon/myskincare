import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import SkinQuiz from "./components/pages/SkinQuiz";
import Shop from "./components/pages/Shop";
import ShopOily from "./components/pages/ShopOily";
import ShopDry from "./components/pages/ShopDry";
import ShopCombination from "./components/pages/ShopCombination";
import ShopNormal from "./components/pages/ShopNormal";
import ShopSensitive from "./components/pages/ShopSensitive";
import Nav from "./components/utils/Nav";
import Footer from "./components/utils/Footer";
import SignUp from "./components/utils/SignUp";
import LoginForm from "./components/utils/LoginForm";

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/oily" component={ShopOily} />
        <Route exact path="/shop/dry" component={ShopDry} />
        <Route exact path="/shop/combination" component={ShopCombination} />
        <Route exact path="/shop/normal" component={ShopNormal} />
        <Route exact path="/shop/sensitive" component={ShopSensitive} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skinquiz" component={SkinQuiz} />
        <Route exact path="/signup" component ={SignUp} />  
        <Route path="/login"render={() =><LoginForm updateUser={this.updateUser}/>}/>  
        </Switch>
      <Footer/>
    </div>
  </Router>
);

export default App;
