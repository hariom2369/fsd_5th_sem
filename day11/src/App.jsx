
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Cart = () => <h2>Cart Page</h2>;

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error:', error));
  }, []);

  console.log(products);

  return (
    <div>
 <BrowserRouter>
  <Header />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/product"
      element={<Product products={products} />}
    />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>

  <Footer />
</BrowserRouter>
    </div>
  );
};

export default App;