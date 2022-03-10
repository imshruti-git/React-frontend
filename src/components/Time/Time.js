import React from 'react'
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
const Time = () => {
  return (
    <div className='container'>
        <Row>
            <Col xl={14} xs={24} offset={1}>
            <h1 className='section-title'>Save Time</h1>
            <h1 className='section-para'>Highly responsive and <span className='section-bold-word'>ERRORLESS</span> customer service at your fingertips.</h1>
            <p style={{fontSize: '25px'}}>Give your customers the gift of time and prompt support with real-time solution bots (answer bots and resolution bots).</p>
            <Button type='primary' ghost size='large' icon={<ArrowRightOutlined />}>Learn more</Button>
            </Col>
            <Col  xl={9} xs={24}>
                <img src='../../../image/time.png' />
            </Col>
        </Row>
    </div>
          
    
  )
}

export default Time