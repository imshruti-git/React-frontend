
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';
import About from './components/AboutUs/About';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />

          </Routes>
        <div className="App">
             hello
        </div>
    </Router>
    
  );
}

export default App;
