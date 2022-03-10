import React from 'react'
import { Button, Space } from 'antd';

const HeroSecond = () => {
  return (
    
        <div className='secondhero'>
            <h1 style={{color:'grey', fontWeight:'bolder', fontSize:'3rem' }}>Customers look for solutions, a rather permanent one.
                Anydone Desk helps you build a conversational bridge to fill the gap.</h1>
            <Space>
                <Button type="primary" size='large'shape='round' >Try Now</Button>
                <Button type="primary" size='large' shape='round'>Watch video</Button>
            </Space>                   
        </div>
        
    
  )
}

export default HeroSecond