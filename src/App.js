
import './App.css';
import Topbar from './components/Topbar/Topbar';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Home from './components/Home/Home';

const { Header, Content } = Layout;


function App() {
  return ( 
          <Layout className="layout">
            <Header>
              <Topbar />
            </Header>
            <Content>
              <Home />
            </Content>
          </Layout>
      
    
    
  );
}

export default App;
