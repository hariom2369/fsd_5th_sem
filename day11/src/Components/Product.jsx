import React from 'react';

const Product = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.thumbnail}
            alt={product.title}
          />

          <h2>{product.title}</h2>

          <p>{product.description}</p>

          <h3>Price: ${product.price}</h3>

          <h4>Rating: ⭐ {product.rating}</h4>
        </div>
      ))}
    </div>
  );
};

export default Product;