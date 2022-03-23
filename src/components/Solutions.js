import React from 'react'
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import AppButton from './AppButton';

const Solutions = () => {
  return (
    
    <div className='container'>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xl={15} xs={24}>
            <h1 className='section-title'>Proactive solutions</h1>
            <h1 className='section-para'>Wouldn't it be <span className='section-bold-word'>AWESOME</span> if your problems were solved before you even realize they existed.</h1>
            <p style={{fontSize: '25px'}}>Interactively address known customer support issues, resolve, and update flutter even before your customers reach you.</p>

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
            
            <Col  className="gutter-row" xl={9} xs={24}  >
                <img src='../../../image/pic.png' alt='' class='responsive-image'/>
            </Col>
        </Row>
    </div>
        
        
    
  )
}

export default Solutions