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
          <main className="text-black flex-grow">
            <section>
            <div className="flex justify-center items-center max-w-[1200px] mx-auto">
              <div className="text-left">
                <h1 className="text-3xl font-bold mb-4">Мы — команда, которая с любовью<br></br>готовит и доставляет самсу.</h1>
                <h3 className="text-[14pt] py-3">
                  Каждый день тысячи людей выбирают нашу самсу,<br />чтобы порадовать себя и своих близких.
                </h3>
              </div>
              <div className="w-[500px] h-auto"><img src={samsa} alt="Самса" /></div>
            </div>
            </section>
            <section>
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/blog" element={<Blog />}/>
                </Routes>
              </div>
            </section>
            
          </main>
          <Footer />
        </BrowserRouter>
      </div> 
    </>
  )
}

export default App
