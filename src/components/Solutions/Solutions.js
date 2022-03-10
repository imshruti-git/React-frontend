import React from 'react'
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const Solutions = () => {
  return (
    
    <div className='container'>
        <Row>
            <Col xl={14} xs={24} offset={1}>
            <h1 className='section-title'>Proactive solutions</h1>
            <h1 className='section-para'>Wouldn't it be <span className='section-bold-word'>AWESOME</span> if your problems were solved before you even realize they existed.</h1>
            <p style={{fontSize: '25px'}}>Interactively address known customer support issues, resolve, and update flutter even before your customers reach you.</p>
            <Button type='primary' ghost size='large' icon={<ArrowRightOutlined />}>Learn more</Button>
            </Col>
            <Col  xl={9} xs={24}  >
                <img src='../../../image/pic.png' />
            </Col>
        </Row>
    </div>
        
        
    
  )
}

export default Solutions