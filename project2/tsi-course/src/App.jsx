import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
