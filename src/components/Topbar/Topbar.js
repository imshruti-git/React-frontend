import React, { useState } from 'react';
import { Menu, Button,Drawer, } from 'antd';




const Topbar = () => {

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  return (
     <div className='container-fluid'>
       <div className='header'>
          <div className="logo"><span className='span1'>Any</span><span className='span2'>Done</span></div>

          <div className='mobileHidden'>
            <Menu className="menu" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About Us</Menu.Item>
              <Menu.Item key="3">Features</Menu.Item>
              <Menu.Item key="4">Solutions</Menu.Item>
              <Menu.Item key="5">Pricing</Menu.Item>
              <Menu.Item key="6">Sign In</Menu.Item>
              <Menu.Item key="7"> <Button type="primary">Primary Button</Button></Menu.Item>
            </Menu>
          </div>
          <div className='mobileVisible'>
              <Button type="primary" onClick={showDrawer}>
                 MENU
              </Button>
                <Drawer placement="right" onClose={onClose} visible={visible}>
                <Menu className="menu" mode="vertical" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1">Home</Menu.Item>
                  <Menu.Item key="2">About Us</Menu.Item>
                  <Menu.Item key="3">Features</Menu.Item>
                  <Menu.Item key="4">Solutions</Menu.Item>
                  <Menu.Item key="5">Pricing</Menu.Item>
                  <Menu.Item key="6">Sign In</Menu.Item>
                  <Menu.Item key="7"> <Button type="primary">Primary Button</Button></Menu.Item>
            </Menu>
                </Drawer>  
          </div>
          
       </div>

      </div>
      
    
   
  
  
  )
}

export default Topbar