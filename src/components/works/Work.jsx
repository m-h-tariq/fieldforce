/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './work.css';
import Images from '../../Images';

export const Work = () => {
  return (
    <Container>
      <Row>
        <Col sm={4} className='iphone className="d-flex justify-content-center'>

        <img src={Images.iPhone13} alt="Your Image" className=" mx-auto d-block" />
        </Col>
        <Col sm={8} className='ai-work'>
        How FieldForce.<span style={{color:"#05B2DC"}}>AI</span> Works?
        <p className='stream'>Streamlined Field Operations Made Simple <br /> Creative Tasks: <span style={{fontSize:"16px"}}>Admins create tasks with specific instructions and deadlines.</span> <br /> Assign Tasks:
        <span style={{fontSize:"16px"}}>Assign tasks to field agents based on their availability, location, or expertise.</span>
        <br />
        Track Progress: 
        <span style={{fontSize:"16px"}}>Monitor task status,location updates,and performance metrics of field agents in real-time.</span>
        <br />
        AI Sales Prediction:
        <span style={{fontSize:"15px"}}>Utilize AI-powered sales prediction to anticipate market trends and plan accordingly.</span>
         </p>
        <span className='admin'></span>
        
        </Col>
      </Row>
      
    </Container>
  )
}
