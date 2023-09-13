import React from 'react'
import './client.css'

const Client = (props) => {
  return (
    <>
   
    <div className='client-box'>
      <p>{props.review}</p>
      <div className='client'>
        
        <img src={props.pic} alt=""  className='client-div'/>
        <span className='name'>{props.name}</span>
        <p className='leader'>{props.post}</p>
        </div>
      
    </div>
    </>
  )
}

export default Client