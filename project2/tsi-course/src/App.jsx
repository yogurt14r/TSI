import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Header from './components/Header';
import samsa from './assets/samsa.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <Header />
          <Navigation />
          <main className="flex-grow text-black">
            <section>
            <div className="flex justify-center items-center max-w-[1200px] mx-auto">
              <div className="text-left">
                <h1>Мы — команда, которая с любовью<br></br>готовит и доставляет самсу.</h1>
                <h3>
                  Каждый день тысячи людей выбирают нашу самсу,<br />чтобы порадовать себя и своих близких.
                </h3>
              </div>
              <div className="w-[500px] h-auto"><img src={samsa} alt="Самса" /></div>
            </div>
            </section>
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
