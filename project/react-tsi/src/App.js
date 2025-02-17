import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
