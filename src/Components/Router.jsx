import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Addproducts from "../pages/Addproducts";
import Cartpage from "../pages/Cartpage";
import { useState, useEffect } from "react";
function Router() {
  const [cart, setCart] = useState([]);
  const [cartCopy, setCartCopy] = useState([]);
  
  useEffect(()=>{
    cart&&cart.length !== 0 && localStorage.setItem("cart", JSON.stringify(cart));

  },[cart])
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
   cartItems && setCart(cartItems);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Home
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Shop
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />

        <Route
          path="/Login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/Register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/Addproducts"
          element={
            <Layout>
              <Addproducts />
            </Layout>
          }
        />
        <Route
          path="/Cartpage"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Cartpage
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
