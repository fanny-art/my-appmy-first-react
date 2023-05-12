import React from 'react';
import Header from '../../components/Header';
import products from '../../products';
import Card from '../../components/Card';

const Products = () => {

  return (
    <div>
      <Header/>
      <div className="products">
      {
        products.map((product) => {
          return (
            <Card product={product} />
          )
        })
      }
      </div>
    </div>
  );
};

export default Products;
