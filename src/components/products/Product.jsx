/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from '../../Images';
import './product.css';
const Product = () => {
  return (
    <Container className='product'>
    <Row>
        
      <Col sm={7} style={{fontSize:"20px", fontWeight:"500"}}>Case studies  <br />
       <span style={{fontSize:"56px", fontWeight:"800"}}>Check how our <br /> product have helped <br /> other businesses grow</span> <br /><br />
        <span style={{fontSize:"20px", fontWeight:"400"}}>FieldForce.AI is the ultimate solution for businesses looking to <br /> optimize their field operations.</span>
        <img className='vector' src={Images.Vector} alt="" /> <br /><br />
        
        <a href="#" className='find'>Find Case Studies <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15.586 11.5248L11.636 7.57484C11.4538 7.38624 11.353 7.13363 11.3553 6.87144C11.3576 6.60924 11.4628 6.35843 11.6482 6.17302C11.8336 5.98761 12.0844 5.88244 12.3466 5.88016C12.6088 5.87789 12.8614 5.97868 13.05 6.16084L18.707 11.8178C18.8002 11.9105 18.8741 12.0207 18.9246 12.142C18.9751 12.2633 19.001 12.3934 19.001 12.5248C19.001 12.6562 18.9751 12.7864 18.9246 12.9077C18.8741 13.029 18.8002 13.1392 18.707 13.2318L13.05 18.8888C12.9578 18.9843 12.8474 19.0605 12.7254 19.1129C12.6034 19.1653 12.4722 19.1929 12.3394 19.1941C12.2066 19.1952 12.0749 19.1699 11.952 19.1197C11.8291 19.0694 11.7175 18.9951 11.6236 18.9012C11.5297 18.8073 11.4555 18.6957 11.4052 18.5728C11.3549 18.4499 11.3296 18.3182 11.3307 18.1854C11.3319 18.0527 11.3595 17.9214 11.4119 17.7994C11.4643 17.6774 11.5405 17.5671 11.636 17.4748L15.586 13.5248H6C5.73478 13.5248 5.48043 13.4195 5.29289 13.2319C5.10536 13.0444 5 12.7901 5 12.5248C5 12.2596 5.10536 12.0053 5.29289 11.8177C5.48043 11.6302 5.73478 11.5248 6 11.5248H15.586Z" fill="#002D72"/>
</svg> </a>
       </Col>
      <Col sm={5}>
        <img className='ellipse11' src={Images.Ellipse11} alt="" />
        <img className='ellipse8'  src={Images.Ellipse8} alt="" />
        <img className='ellipse7'  src={Images.Ellipse7} alt="" />
        <img className='ellipse10'  src={Images.Ellipse10} alt="" />
        <img className='ellipse13'  src={Images.Ellipse13} alt="" />
        <img className='ellipse12'  src={Images.Ellipse12} alt="" />
        <img className='ellipse6'  src={Images.Ellipse6} alt=""  />
        <img className='ellipse4'  src={Images.Ellipse4} alt=""  />
      </Col>
      
    </Row>
    
  </Container>
  )
}

export default Product