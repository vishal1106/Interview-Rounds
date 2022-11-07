import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./Product.module.css"
const Cart = ({count}) => {
  const [data,setData]=useState([])
  const getdata=()=>{
    axios.get(" http://localhost:8080/product").then((res)=>{
        setData(res.data)
    })
   }

   useEffect(()=>{
getdata()
   },[count])
   let sum=0;
  for(var i=0;i<data.length;i++)
  {
   sum=sum+data[i].count*data[i].price
  }
  console.log(sum)
    return (
    <div>
        <h2>Cart</h2>

        {
                data && data.map((el)=>{
                    return <div className={styles.main1} >
                      {
                        el.count===0 ? " " :<p>{el.name} <span> {el.count}*{el.price}</span></p>
                      }  
                       
                       
                    </div>
                })
                
              }
              <div>
                <h2>Total:{sum}</h2>
              </div>
        
    </div>
  )
}

export default Cart