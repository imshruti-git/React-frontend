import React from 'react'
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import AppButton from './AppButton';
const Time = () => {
  return (
    <div className='container'>
        <Row>
            <Col xl={15} xs={24}>
            <h1 className='section-title'>Save Time</h1>
            <h1 className='section-para'>Highly responsive and <span className='section-bold-word'>ERRORLESS</span> customer service at your fingertips.</h1>
            <p style={{fontSize: '25px'}}>Give your customers the gift of time and prompt support with real-time solution bots (answer bots and resolution bots).</p>
            <AppButton
                        type='button'                        
                        borderRadius='10px'
                        border=' 2px solid #4628ff '
                        textColor='#4628ff'
                        buttonBackground='transparent'
                        margin='2rem 0'
                    >
                        Learn More <ArrowRightOutlined />
            </AppButton>
            </Col>
            <Col  xl={9} xs={24}>
                <img src='../../../image/time.png' alt='' class='responsive-image' />
            </Col>
        </Row>
    </div>
          
    
  )
}

export default Time