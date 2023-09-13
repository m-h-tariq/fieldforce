import React from 'react'
import './box.css';
import Card from 'react-bootstrap/Card';

const Box = (props) => {
  return (
    
    
    
      <div class="box">
        
        <img className='top-center' src={props.image}  alt='top'/><br></br>
        <span className='user'>{props.title}</span>
        <span className='user use'>{props.inter}</span>
        
      </div>
     
  )
}

export default Box