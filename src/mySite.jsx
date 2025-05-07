import React from 'react'
import Professional from './profession/professional';
import Art from './art/art';
import Writings from './writings/writings';
import Contact from './contact/contact';
import HomePage from './homepage/homePage'
import {
    BrowserRouter,useRoutes
  } from "react-router-dom";
import Home from './home/home';
import OrderCommission from './commissions/order/order_commission';
import ViewCommissions from './commissions/view/view_commissions';
import Freebies from './freebies/freebies';
import Products from './products/products';
import Layout from './layout/layout';
const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> }, 
      { path: 'home', element: <Home /> },
      { path: 'professional', element: <Professional /> },
      { path: 'art', element: <Art /> },
      { path: 'freebies', element: <Freebies /> },
      { path: 'products', element: <Products /> },
      { path: 'writings', element: <Writings /> },
      { path: 'about', element: <Contact /> },
      { path: 'commissions/order', element: <OrderCommission /> },
      { path: 'commissions/view', element: <ViewCommissions /> },
    ]
  }
];
function AppRoutes() {
  const routes = useRoutes(routesConfig);
  return routes;
}
export default function MySite() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

