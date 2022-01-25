import React from 'react';
import ProductItem from './ProductItem';
import style from './ProductsList.module.css';
export default function index({products}) {
  
  return (
    <section className={style.section}>
      <div className="products-section__title">
        <h2>products</h2>
      </div>
      <div className={style.container}>
       {products.map((product,i) => <ProductItem key={i} {...product}/>)}
      </div>
    </section>)
}
