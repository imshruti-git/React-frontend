import React from 'react'
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import AppButton from './AppButton';

const Work = () => {
  return (
    <div className='container'>
        <Row>
        <Col  xl={{span:9, order:1}} xs={{span: 24, order:2}}>
        <img src='../../../image/work.png' alt='' class='responsive-image'/>
            </Col>
            <Col xl={{span:14, order:2}} xs={{span:24, order:1}} offset={1}>
                
                <h1 className='section-title'>Simplify Work</h1>
            <h1 className='section-para'>Satisfying every customer can be challenging. But, with <span className='section-bold-word'>Anyone Desk</span>, we help you break that ice.</h1>
            <p style={{fontSize: '25px'}}>Let the AI-powered bots handle conversational and personalized customer support while your agents can focus on quality service.</p>
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
        </Row>
      </div>
        
        
  )
}

export default Work