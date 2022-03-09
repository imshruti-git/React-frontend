import React from 'react'
import { Row, Col, Button } from 'antd';

const Time = () => {
  return (
    <div className='container'>
        <Row>
            <Col xl={14} xs={24} offset={1}>
            <h1 style={{fontSize: '35px', fontWeight: 'bold'}}>Save Time</h1>
            <h1 style={{fontSize: '35px', fontWeight: 'bold'}}>Highly responsive and <span style={{color:'blue'}}>ERRORLESS</span> customer service at your fingertips.</h1>
            <p style={{fontSize: '25px'}}>Give your customers the gift of time and prompt support with real-time solution bots (answer bots and resolution bots).</p>
            <Button type='primary' ghost size='large'>Learn more</Button>
            </Col>
            <Col  xl={9} xs={24}>
                <img src='../../../image/time.png' />
            </Col>
        </Row>
    </div>
          
    
  )
}

export default Time