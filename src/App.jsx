import { BrowserRouter,Routes,Route,Link } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Page from './components/Page';
import { AccordionButton } from 'react-bootstrap';
import Products from './pages/Products';


function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
