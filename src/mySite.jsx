import React from 'react'
import Header from './header/header'
import Professional from './profession/professional';
import Art from './art/art';
import Writings from './writings/writings';
import Contact from './contact/contact';
import HomePage from './homepage/homePage'
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
