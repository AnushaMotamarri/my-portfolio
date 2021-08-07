import React from 'react'
import {HeaderNames,HeaderDetails} from './enums'
import './header.css'


import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";
  import logo from './images/logo.png'

export default function Header({hideHeaderButtons=false}) {
    return (
        <div className="header_wrapper">
           <Link to="/" className="header_item">Anusha</Link> 
           {/* <img src={logo}></img> */}
           
           {!hideHeaderButtons&& <div className="header_categories">
              {HeaderNames.map((name)=>{
                 return <Link to={HeaderDetails[name].route} className={`header_item header_item_${name}`} key={name}>
                     { HeaderDetails[name].label}
                  </Link>
              })}
           </div>}
          
        </div>
    )
}
