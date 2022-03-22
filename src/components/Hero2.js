import React from 'react'
import { Button, Space } from 'antd';
import AppButton from './AppButton';

const HeroSecond = () => {
  return (
    <>
        <div className='secondhero'>
            <h1 style={{color:'grey', fontWeight:'bolder', fontSize:'3rem' }}>Customers look for solutions, a rather permanent one.
                Anydone Desk helps you build a conversational bridge to fill the gap.</h1>
            <Space>
                <AppButton
                        type='button'
                        buttonPadding='5px 30px'
                        fontSize='25px'
                        textColor='white'
                        buttonBackground=' #4628ff'
                        borderRadius='10px'
                        border='none'
                    >
                        Try Now
                </AppButton>
                <AppButton
                        type='button'
                        buttonPadding='5px 30px'
                        fontSize='25px'
                        borderRadius='10px'
                        border=' 2px solid #4628ff '
                        textColor='#4628ff'
                        buttonBackground='transparent'
                    >
                        Watch Video
                </AppButton>
            </Space>                   
        </div>
        </>   
    
  )
}

export default HeroSecond