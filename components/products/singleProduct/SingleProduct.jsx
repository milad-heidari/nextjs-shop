import React from 'react';
import ReactStars from 'react-stars'
import style from './SingleProduct.module.css';
import Image from 'next/image';
import {FaShoppingCart,FaShareAlt} from 'react-icons/fa';
export default function SingleProduct({product}) {

  return <section className={style.container}>
      <div className={style.productImages}>
        <Image 
          src={product.image} 
          className={style.image} 
          width={100} 
          height={100} 
          layout='responsive' 
          alt={product.title}/>
      </div>

      <div className={style.productDetails}>
        <div className={style.title}>
          <h1>{product.title}</h1>
          <ReactStars 
            // className={style.rate} 
            edit={false}
            size={18}
            count={5} 
            value={product.rating.rate} 
            color2={'#ec4b68'} />
        </div>
        <div className={style.category}>
          <h4>{product.category}</h4>
        </div>
        <div className={style.price}>
          <p>${product.price}</p>
        </div>
        <div className={style.descriptionTitle}>
          <h4>DESCRIPTION</h4>
        </div>
        <div className={style.description}>
          <h2>{product.description}</h2>
        </div>
        <div className={style.choices}>
          <div>
          <p>{`COUNT: ${product.rating.count}`}</p>
          <p></p>
          </div>
          <div>
            <p>QTY</p>
            <select className={style.quantity}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className={style.buttons}>
          <button className={style.addToCart}>
            <FaShoppingCart size={24} color='#fff'/>
            <p>ADD TO CART</p>
          </button>
          <button className={style.shareBtn}>
            <FaShareAlt size={24} color='#bababa'/>
          </button>
        </div>
      </div>
  </section>;
}
