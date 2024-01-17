import React from 'react';
import { Home } from '../Home';
import { Header } from '../Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from '../Footer';
import { Loggin } from '../Loggin';
import { SearchDetail } from '../SearchDetail';
import { Admin } from '../Admin';
import { ClientDetail } from '../ClientDetail';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-into" element={<Loggin />} />
          <Route path="/get-into/:id" element={<SearchDetail/>} />
          <Route path="/admin/client-detail/:account" element={<ClientDetail/>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
