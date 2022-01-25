import React from 'react';
import Head from 'next/head';
import style from '../../../styles/SinglePage.module.css';
import {useRouter} from 'next/router';
import SingleProduct from '../../../components/products/singleProduct/SingleProduct';
import * as http from '../../../services/Http';
export default function SinglePage({product}) {
    const router = useRouter()
    const q = router.query
  return (
    <>
        <Head>
            <title>{product.title}</title>
            <meta name='description' content={product.description}/>
        </Head>
        <div className={style.container}>
            <SingleProduct product={product}/>
        </div>
    </>)
}


export async function getStaticProps(context){
    const {id} = context.params
    const product = await http.get(`/products/${id}`)

    return {
        props: {product:product.data}
    }
}

export async function getStaticPaths(){
   const response = await http.get('/products')
   const paths = await response.data.map(product => ({params:{id:product.id.toString()}}))
//    console.log('asdfasd',paths)
   return {paths,fallback:true}
}