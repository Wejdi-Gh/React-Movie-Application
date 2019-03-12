import React, { Component } from 'react';
import './App.css';
import Mainmovies from './components/MainMovie';
import { Route,Switch, Link } from "react-router-dom";
import Login from "../src/components/login";
import Home from "../src/components/home";
import Mainmoviesapi from './components/mainmoviapi';


class App extends Component {
  

  render() {
    return (
<div className="App">
<div className="container-fluid m-0 p-0">
  <div className="row">
    <div className ="col-md-1 routelinks">
       <p> <Link to = "/"> Home </Link> </p> 
       <p> <Link to = "/MovieList"> Movies </Link> </p> 
       <p> <Link to = "/Login"> Sign Up </Link> </p> 
       <p> <Link to = "/API"> API</Link> </p> 
       
    </div>
    <div className ="col-md-11 ">
     <Switch>
        <Route exact path="/"  component= {Home} />
        <Route path="/Login"  component= {Login} />
        <Route path="/MovieList"  component= {Mainmovies} />
        <Route path="/API"  component= {Mainmoviesapi} />
     </Switch>
     </div>
     </div>
     </div>
     </div>
    );
  }
}

export default App;
