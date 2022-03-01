import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }
 
  
  useEffect(() => {
    fetchProducts();
    fetchCart()
  }, []); //only runs on the render

console.log(cart)

  return (
    <div>
      <Navbar />
      <Products products={products}/>
    </div>
  );
};

export default App;
