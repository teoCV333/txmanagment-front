import React from 'react';
import { Home } from '../Home';
import { Header } from '../Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from '../Footer';
import { Loggin } from '../Loggin';
import { SearchDetail } from '../SearchDetail';
import { PDFExtract } from '../PDFExtract';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-into" element={<Loggin />} />
          <Route path="/get-into/:id" element={<SearchDetail/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
