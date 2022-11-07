import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./Home.module.css"
import SingleCard from './SingleCard'
const Home = () => {
  const [data,setData]=useState([])
  const [newdata,setNewdata]=useState([])
const [serach,setSerach]=useState("")
  const FetchData=()=>{
    axios("https://jsonplaceholder.typicode.com/posts").then((res)=>{
   setData(res.data) 
   setNewdata(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  useEffect(()=>{
 FetchData()
  },[])
 
const filterHandle=()=>{
 
  const result=newdata.filter((el)=>{
    if(serach=="")
    {
      setData([...newdata])
    }
   else{
    const  x=[];
    for(var i=0;i<newdata.length;i++ )
    {
     if(newdata[i].title.includes(serach))
     {
      x.push(newdata[i])
     }
    }
setData(x)
   }
   
 
  
  })
  
  
}


    return (
    <div>
      <input type="text" placeholder='Enter the Text' onChange={(e)=> setSerach(e.target.value)} />
      <button onClick={filterHandle}>Serach</button>
    <div className={styles.main}>
      {
        data && data.map((el)=>{
          return <SingleCard {...el} key={el.id}/>
        })
      }
    </div>
    </div>
  )
}

export default Home