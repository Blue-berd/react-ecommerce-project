/** @format */

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  PrivateRoute,
  About,
  Cart,
  Checkout,
  AuthWrapper,
  Error,
} from "./pages";

function App() {
  console.log("PROCESS", process.env.REACT_APP_DOMAIN);
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:id" element={<SingleProduct />}></Route>
          <Route
            path="checkout"
            element={
              <PrivateRoute Checkout={Checkout}>
                
              </PrivateRoute>
            }></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
