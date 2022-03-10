import React from 'react'
import { Row, Col, Space, Anchor } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled, LinkedinFilled } from '@ant-design/icons';

const { Link } = Anchor;


const AppFooter = () => {
  

  return (
    <div className='container-fluid'>
      <Row>
          <Col xl={5} xs={24}>
          <span className='span1'>Any</span><span className='span2'>Done</span>
          <br/>
          <p>Ready to serve customers. Anywhere, Anytime!</p>
          </Col>

          <Col xl={3} xs={12} offset={1}>
            <h2>Usability</h2>
              <Anchor>
                  <Link href="#components-anchor-demo-basic" title="Education" />
                  <Link href="#components-anchor-demo-static" title="Software and IT" />
                  <Link href="#API" title="Telecommunications" />
                  <Link href="#Anchor-Props" title="Financial Institutions" />
                  <Link href="#Link-Props" title="Governmanet" />
                  <Link href="#Link-Props" title="Healthcare" />
                  <Link href="#Link-Props" title="Manufacturing" />
                  <Link href="#Link-Props" title="Media" />
                  <Link href="#Link-Props" title="Retail" />
                  
              </Anchor>
          </Col>

          <Col xl={3} xs={12}offset={2}>
            <h2>Company</h2>
              <Anchor>
                  <Link href="#components-anchor-demo-basic" title="About Us" />
                  <Link href="#components-anchor-demo-static" title="Privacy Policy" />
                  <Link href="#API" title="Terms of service" />
                  <Link href="#Anchor-Props" title="Blogs" />
                  <Link href="#Link-Props" title="Career" />
                  <Link href="#Link-Props" title="Contact Us" />                  
              </Anchor>
          </Col>

          <Col xl={3} xs={12} offset={1}>
            <h2>Product</h2>
              <Anchor>
                  <Link href="#components-anchor-demo-basic" title="Feature" />
                  <Link href="#components-anchor-demo-static" title="Pricing" />                
              </Anchor>
          </Col>

          <Col xl={6} xs={12} >
            <h2>Connect with AnyOne Desk</h2>
            <Row>
              <Col span={12}>
                <FacebookFilled style={{fontSize:'50px'}}  />
              </Col>

              <Col span={12}>
                <TwitterCircleFilled style={{fontSize:'50px'}}/>
              </Col>
            </Row>
            <br />

            <Row>
              <Col span={12}>
                <InstagramFilled style={{fontSize:'50px'}}/>
              </Col>

              <Col span={12}>
                <LinkedinFilled style={{fontSize:'50px'}}/>
              </Col>
            </Row>  
          </Col>
      </Row>
    </div>
  )
}

export default AppFooter