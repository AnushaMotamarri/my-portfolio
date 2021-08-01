import React from 'react'
import Header from './header'
import Professional from './professional';
import Art from './art';
import Writings from './writings';
import Contact from './contact';
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
        <Header></Header>
       
        <Switch>
          <Route path="/professional">
            <Professional />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/writings">
            <Writings />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Professional />
          </Route>
        </Switch>
        </Router>
       
        </div>
    )
}
