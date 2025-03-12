import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <Header />
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/blog" element={<Blog />}/>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div> 
    </>
  )
}

export default App
