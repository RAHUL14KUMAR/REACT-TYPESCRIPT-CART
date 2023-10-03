import {Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import { ShopingCartProvider } from './context/ShoppingCartContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <ShopingCartProvider>
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Container>
    </ShopingCartProvider>
  )
}

export default App
