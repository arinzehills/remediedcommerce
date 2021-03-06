import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Products,
  Navbar,
  Cart,
  Checkout,
  HomePage,
  Footer,
} from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateToCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });

    setCart(item.cart);
  };
  const handleRemoveFromCart = async (productId, quantity) => {
    const item = await commerce.cart.remove(productId);

    setCart(item.cart);
  };
  const handleEmptyCart = async (productId, quantity) => {
    const item = await commerce.cart.empty();

    setCart(item.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async () => {
    try {
      // const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      // setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart.line_items.length);
  //  const length=cart.line_items.length;
  //  const line_items=cart.line_items;
  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateToCartQty={handleUpdateToCartQty}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
