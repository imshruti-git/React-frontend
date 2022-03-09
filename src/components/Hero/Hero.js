import React from 'react'
import { Button } from 'antd';

const Hero = () => {
  return (
      <div className='container-fluid'>
           <div className='apphero'>
                <h1>Deliver Exceptional Customer Service with AnyDone Desk</h1>
                <p>Offer a delightful conversational support that is immediate and friendly. Exceed your customer's expectation with anyone desk's AI powered support system</p>  
                <div className='buttons'>
                <Button type="primary" size='large' shape='round'>Try Now</Button>
                <Button type="primary" size='large' shape='round'>Watch video</Button>
                </div>
                <img src='../../../image/ss.png'/>          
            </div>
      </div>
   
  )
}

export default Hero