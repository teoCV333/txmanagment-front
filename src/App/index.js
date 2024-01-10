import React from 'react';
import { Home } from '../Home';
import { Header } from '../Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from '../Footer';
import { Loggin } from '../Loggin';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-into" element={<Loggin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
