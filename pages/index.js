import styles from '../styles/Home.module.css'
import Head from 'next/head';
import ProductsList from '../components/products/productsList/ProductsList';
import * as http from '../services/Http';
export default function Home({products}) {
  return (
    <>
    <Head>
      <title>next js shop</title>
      <meta name='description' content='online shop develop with next js' />
    </Head>
    <div className={styles.container}>
      <ProductsList products={products}/>
    </div>
    </>
  )
}

export async function getStaticProps(){
  const products = await http.get('/products')
  return {
    props:{products:products.data}
  }
}