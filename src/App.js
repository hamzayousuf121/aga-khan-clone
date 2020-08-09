import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/nav/nav'
import Home from './components/Homepage/home';
import './App.css';
import Logo from './components/Logo/logo'
import Service from './components/Service/service';
import About from './components/about/aboutUs';
import SingUp from './components/singUp/singup';
import User from './components/userPage/user';
import logIn from './components/singIn/singIn';
import Contact from './components/contact/contact';


import { BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
   
    <Router>
      <div>
      <Logo />
      <Navbar />
      
    </div>

    <Route exact path="/" component={Home}></Route>
    <Route path="/service" component={Service}></Route>
    <Route path="/aboutUs" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/singUp" component={SingUp}></Route>
    <Route path="/logIn" component={logIn}></Route>
    <Route path="/User" component={User}></Route>

    </Router>
  );
}

export default App;
