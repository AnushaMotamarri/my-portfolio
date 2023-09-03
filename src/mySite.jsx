import React from 'react'
import Header from './header/header'
import Professional from './profession/professional';
import Art from './art/art';
import Writings from './writings/writings';
import Contact from './contact/contact';
import HomePage from './homepage/homePage'
import {
  
    BrowserRouter as Router,
    Route,
    Routes
    
  } from "react-router-dom";
import Home from './home/home';
import OrderCommission from './commissions/order/order_commission';
import ViewCommissions from './commissions/view/view_commissions';
import Freebies from './freebies/freebies';
import Products from './products/products';
export default function MySite() {
    return (
        <Router>
     
  
          
          <Routes>
            <Route path="/home" element={
            <>
             <Header/>
                <Home /></>
           
          }>
              
              </Route>
            <Route path="/professional" element={
              <>
              <Header/>
                          <Professional />
              </>
            }
           
            >
              
              </Route>
            <Route path="/art" element={
                <>
                <Header/>
                <Art />
                </>
                }>
            </Route>
            <Route path="/freebies" element={
              <>
              <Header/>
              <Freebies />
              </>
            }></Route>
            <Route
            path="/products" 
            element={
              <>
              <Header/>
              <Products/>
              </>
            }
            />
            <Route path="/writings" element={
              <>
               <Header/>
               <Writings />
              </>
              
            }>
             
            </Route>
            <Route path="/about" element={
              <>
              <Header/>
              <Contact />
              </>
            }>
              
            </Route>
            <Route path="/commissions/order" element={<><Header/><OrderCommission/></>}>

            </Route>
            <Route path="/commissions/view" element={<><Header/><ViewCommissions/></>}>

            </Route>
            <Route path="/"  
            
            element={
              <>
             <Header hideHeaderButtons={true}/>
              <HomePage/>
              </>}
            >
              
            </Route>
          
          </Routes>
 
        </Router>
    )
}
