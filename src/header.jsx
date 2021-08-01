import React from 'react'
import {HeaderNames,HeaderDetails} from './enums'
import './header.css'
import logo from './images/logo.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Professional from './professional';
import Art from './art';
import Writings from './writings';

export default function Header() {
    return (
        <div className="header_wrapper">
           <div>Anusha</div>
           {/* <img src={logo}></img> */}
           
           <div className="header_categories">
              {HeaderNames.map((name)=>{
                 return <Link to={HeaderDetails[name].route} className={`header_item header_item_${name}`} key={name}>
                     { HeaderDetails[name].label}
                  </Link>
              })}
           </div>
          
        </div>
    )
}
