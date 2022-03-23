import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WechatOutlined  } from '@ant-design/icons';
import { Layout, Button, Affix, Popover } from 'antd';

import Topbar from './components/common/Topbar';
import AppFooter from './components/common/AppFooter';
import Home from './views/Home/Home';
import About from './views/AboutUs/About';
import ChatForm from './components/ChatForm';

const { Header, Content, Footer } = Layout;


function App() {
  const [colorChange, setColorChange] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >=80) {
      setColorChange(true);
    }
    else{
      setColorChange(false);
    }
  };

  window.addEventListener('scroll', changeHeaderColor);

  return ( 
    <Router>
      <Layout className="mainlayout">
            <Header className={colorChange ? 'changecolor' : ''}>
              <Topbar />
            </Header>
            <Content>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/aboutus" element={<About />} />
              </Routes>
              <Affix style={{position:'fixed',bottom:30,right:40}}>  
                  <Popover content={<ChatForm />} title="Title" trigger="click">
                      <Button icon={<WechatOutlined/>}/>
                   </Popover>       
              </Affix>
            </Content>
            <Footer>
              <AppFooter />
            </Footer> 
          </Layout>
    </Router>
          
  );
}

export default App;
