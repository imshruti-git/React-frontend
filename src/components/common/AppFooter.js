import React from 'react'
import { Row, Col } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled, LinkedinFilled } from '@ant-design/icons';



const AppFooter = () => {
  
  return (
    <>
    <div className='container-fluid'>  
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xl={6} xs={24}>
            <div className='footer-header'>
                <h1><span className='span1'>any</span><span className='span2'>done</span></h1>
                 <p style={{fontSize: '20px', padding:'10px'}}>Ready to serve customers. Anywhere, Anytime!</p>
            </div>
          </Col>

          <Col className="gutter-row" xl={4} xs={12} >
            
            <ul className='footer-menu'>
            <h2 style={{ fontWeight:'bold'}}>Usability</h2>
              <li>Education</li>
              <li>Software and IT</li>
              <li>Telecommunications</li>
              <li>Financial Institutions</li>
              <li>Government</li>
              <li>Health Care</li>
              <li>Manufacturing</li>
              <li>Media</li>
              <li>Retail</li>
            </ul>
          </Col>

          <Col className="gutter-row" xl={4} xs={12}>
            
            <ul className='footer-menu'>
              <h2 style={{ fontWeight:'bold'}}>Company</h2>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Blogs</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </Col>

          <Col className="gutter-row" xl={4} xs={12}>
            
            <ul className='footer-menu'>
            <h1 style={{fontWeight:'bold'}}>Product</h1>
              <li>Feature</li>
              <li>Pricing</li>
            </ul>
          </Col>

          <Col className="gutter-row" xl={6} xs={12} >
            <h2 style={{fontWeight:'bold'}}>Connect with AnyOne Desk</h2>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                <FacebookFilled style={{fontSize:'50px'}}  />
              </Col>

              <Col className="gutter-row" span={12}>
                <TwitterCircleFilled style={{fontSize:'50px'}}/>
              </Col>
            </Row>
            <br />

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                <InstagramFilled style={{fontSize:'50px'}}/>
              </Col>

              <Col className="gutter-row" span={12}>
                <LinkedinFilled style={{fontSize:'50px'}}/>
              </Col>
            </Row>  
          </Col>
      </Row>
  </div>
    <div className='copyright'>
      &copy; Anydone Desk. All Rights Reserved.
    </div>
    </>
  )
}

export default AppFooter