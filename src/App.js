import {Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import './style/App.css';

function App() {
  return (
    <>
    <div className="AppCtr">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
