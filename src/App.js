
import './App.css';
import Topbar from './components/Topbar/Topbar';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Home from './components/Home/Home';
import AppFooter from './components/AppFooter';

const { Header, Content, Footer } = Layout;


function App() {
  return ( 
          <Layout className="layout">
            <Header>
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
