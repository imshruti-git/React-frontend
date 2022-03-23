import React, { useState } from 'react';
import { Menu, Button, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { WechatOutlined  } from '@ant-design/icons';

const Topbar = () => {

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const handleHome = (e) =>{
    navigate("/");
  };

  const handleAbout = (e) =>{
  navigate("/aboutus");
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  

  

  return (
     <div className='container-fluid'>
       <div className='header'>
          <div className="logo">
          <WechatOutlined style={{fontSize: '60px', color: 'aqua'}} /> 
            <span className='span1'>any</span><span className='span2'>done</span>
          </div>

          <div className='mobileHidden'>
            <Menu className="menu" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" onClick={handleHome}>Home</Menu.Item>
              <Menu.Item key="2" onClick={handleAbout}>About Us</Menu.Item>
              <Menu.Item key="3">Features</Menu.Item>
              <Menu.Item key="4">Solutions</Menu.Item>
              <Menu.Item key="5">Pricing</Menu.Item>
              <Menu.Item key="6">Sign In</Menu.Item>
            </Menu>
          </div>

          <div className='mobileVisible'>     
            
             <MenuIcon onClick={showDrawer}/>
              
                <Drawer placement="right" onClose={onClose} visible={visible}>
                  <Menu className="menu" mode="vertical" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">About Us</Menu.Item>
                    <Menu.Item key="3">Features</Menu.Item>
                    <Menu.Item key="4">Solutions</Menu.Item>
                    <Menu.Item key="5">Pricing</Menu.Item>
                    <Menu.Item key="6">Sign In</Menu.Item>
                   
                  </Menu>
                  <Button type="primary">Try Now</Button>
                </Drawer>  
          </div>
       </div>
      </div>  
  )
}

export default Topbar