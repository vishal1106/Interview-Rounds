import React from 'react'

const SingleCard = ({id,title,body}) => {

  return (
    <div key={id}>
        <div >
           <p>Title:- {title}</p> 
           <p>Body:- {body}</p>
        </div>
    </div>
  )
}

export default SingleCard