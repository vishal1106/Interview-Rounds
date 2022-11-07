import React from 'react'
import { useState } from 'react'
import Cart from './Cart'
import Product from './Product'
import styles from "./Product.module.css"
const Home2 = () => {
 
const [Productid,setProductid]=useState()
const [count,setCount]=useState(0)
  console.log(Productid)
  return (
    <div className={styles.box}>
        <Product setId={setProductid} count={count} setCount={setCount}/>
        <Cart  count={count}/>
    </div>
  )
}

export default Home2