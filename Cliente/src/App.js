import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Perfil from './components/Perfil';
import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Perfil />} />
            <Route path="/proyectos" element={<Portfolio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
