import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Topbar from './components/Topbar';
import Home from './views/Home/Home';
import AppFooter from './components/AppFooter';

import { Layout } from 'antd';
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
          <Layout className="mainlayout">
            <Header className={colorChange ? 'changecolor' : ''}>
              <Topbar />
            </Header>
            <Content>
              <Home />
            </Content>
            <Footer>
              <AppFooter />
            </Footer> 
          </Layout>
  );
}

export default App;
