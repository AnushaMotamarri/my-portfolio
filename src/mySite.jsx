import React from 'react'
import Header from './header'
import Professional from './professional';
import Art from './art';
import Writings from './writings';
import Contact from './contact';
import HomePage from './homePage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function MySite() {
    return (
        <div>
             <Router>
       
        <Switch>
          <Route path="/professional">
          <Header/>
            <Professional />
          </Route>
          <Route path="/art">
          <Header/>
            <Art />
          </Route>
          <Route path="/writings">
          <Header/>
            <Writings />
          </Route>
          <Route path="/contact">
          <Header/>
            <Contact />
          </Route>
          <Route path="/">
          <Header hideHeaderButtons={true}/>
            <HomePage/>
          </Route>
        </Switch>
        </Router>
       
        </div>
    )
}
