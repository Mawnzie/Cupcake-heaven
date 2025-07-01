import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Page from './components/Page';
import { AccordionButton } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<AccordionButton/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
