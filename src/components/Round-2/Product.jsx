import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from "./Product.module.css"
const Product = ({product,setId,count,setCount}) => {
const [data,setData]=useState([])
    const mainhandler=(e)=>{
        console.log(e)
    }
      const {id}=useRef; 
     


       const getdata=()=>{
        axios.get(" http://localhost:8080/product").then((res)=>{
            setData(res.data)
        })
       }

       useEffect(()=>{
getdata()
       },[])
    
       const Reducehandle =(e)=>{

        setCount(count+e)
  
     

       }

       const handlebox=(el)=>{
        let newobj={
            count:count
        }
        axios.patch(`http://localhost:8080/product/${el.id}`,newobj).then((res)=>{
            getdata()
           
        }).catch((err)=>{
            console.log(err)
        })
       
          } 
  return (
    <div>
        <div className={styles.main} >
            <div>
                <h2>Products</h2>
              {
                data && data.map((el)=>{
                    return <div className={styles.main1}  onClick={()=>handlebox(el)}>
                        <p>{el.name}</p>
                        <p>{el.price}</p>
                        <div>
                            <button onClick={()=>Reducehandle(-1)}>-</button>
                            {el.count}
                            <button onClick={()=>Reducehandle(+1)}>+</button>
                        </div>
                    </div>
                })
              }
       
            </div>
            
        </div>
    </div>
  )
}

export default Product