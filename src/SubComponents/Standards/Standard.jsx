import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './standard.css';

const Standard = (props) => {
  return (
    <div>
         <Container>
      <Row className='card_div'>
        <Col sm className={`standard ${props.Class}`}>
        <div className='coin'>
            <p className={`plan ${props.Change_cost_Color}`}>{props.Chose_plan}</p>
            <p className={`average ${props.Change_cost_Color}`}>{props.Coin}</p>
            <p className={`cost ${props.Change_cost_Color}`}>{props.Cost}</p>
            <span className='Per_month'>{props.Per}</span>
            <button className={`select ${props.Change} `}>{props.Finally_select}</button>
            </div>
            <div className='group_tik'>
                <img src={props.Logo} alt="" />
                <span className='collection'>{props.Collection}</span>
                
            </div>
            <div className='access'>
                <img src={props.Logo} alt="" />
                <span className='collection'>{props.Access}</span>
                
            </div>
            <div className='action'>
                <img src={props.Logo} alt="" />
                <span className='collection'>{props.Action}</span>
                
            </div>
            <div className='featur'>
                <img src={props.Logo} alt="" />
                <span className='collection'>{props.Feature}</span>
                
            </div>
            <div className='support'>
                <img src={props.Logo} alt="" />
                <span className='collection'>{props.Support}</span>
                
            </div>
            
            <div className='blank'>
                <img src={props.Blank} alt="" />
                <span className={`collection ${props.line}`}>{props.Devices}</span>
                
            </div>
            <div className='Share_user'>
                <img src={props.Blank} alt="" />
                <span className= {`collection ${props.line}`}>{props.Users}</span>
                
            </div>
        </Col>
        <Col>
        </Col>
        <Col >
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Standard