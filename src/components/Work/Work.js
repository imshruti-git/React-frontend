import React from 'react'
import { Row, Col, Button } from 'antd';

const Work = () => {
  return (
    <div className='container'>
        <Row>
        <Col  xl={{span:9, order:1}} xs={{span: 24, order:2}}>
        <img src='../../../image/work.png' />
            </Col>
            <Col xl={{span:14, order:2}} xs={{span:24, order:1}} offset={1}>
                
                <h1 style={{fontSize: '35px', fontWeight: 'bold'}}>Simplify Work</h1>
            <h1 style={{fontSize: '35px', fontWeight: 'bold'}}>Satisfying every customer can be challenging. But, with <span style={{color:'blue'}}>Anyone Desk</span>, we help you break that ice.</h1>
            <p style={{fontSize: '25px'}}>Let the AI-powered bots handle conversational and personalized customer support while your agents can focus on quality service.</p>
            <Button type='primary' ghost size='large'>Learn more</Button>
            </Col>
        </Row>
      </div>
        
        
  )
}

export default Work