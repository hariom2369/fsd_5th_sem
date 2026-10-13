import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Product from './Components/Product.jsx';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <>
      <Header />

      <main className="products">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <Product products={products} />
        )}
      </main>
    </>
  );
};

export default App;