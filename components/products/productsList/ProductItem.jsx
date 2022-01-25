import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './ProductItem.module.css';
export default function ProductItem(props) {


  return (
    <div className={style.container}>
      <Link href={`/products/details/${props.id}`} passHref>
        <a>
        <Image 
          width={150}
          height={150}
          className={style.image} 
          src={props.image} 
          alt={props.title} />
        <p className={style.title}>{props.title}</p>
        <p>{`$${props.price}`}</p>
        </a>
      </Link>
    </div>
  )
}
