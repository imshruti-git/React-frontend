import React from 'react'
import { Button, Space } from 'antd';
import AppButton from './AppButton';

const Hero = () => {
  return (
      <>
           <div className='apphero'>
                <h1>Deliver Exceptional Customer Service with AnyDone Desk</h1>
                <p>Offer a delightful conversational support that is immediate and friendly. Exceed your customer's expectation with anyone desk's AI powered support system</p>  
                
                <Space>
                    <AppButton
                        type='button'
                        buttonPadding='20px 40px'
                        fontSize='25px'
                        textColor='white'
                        buttonBackground=' #4628ff'
                        borderRadius='10px'
                        border='none'
                        margin='0 0 5rem 0'
                    >
                        Try Now
                    </AppButton>
                    <AppButton
                        type='button'
                        buttonPadding='20px 40px'
                        fontSize='25px'
                        borderRadius='10px'
                        border=' 2px solid #4628ff '
                        textColor='#4628ff'
                        buttonBackground='transparent'
                        margin='0 0 5rem 0'
                    >
                        Watch Video
                    </AppButton>
                </Space>
                
                
                <img src='../../../image/ss.png' alt='' class='responsive-image'/>          
            </div>
      
      </>
  )
}

export default Hero