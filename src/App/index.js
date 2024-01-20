import React from 'react';
import { Home } from '../Home/index.js';
import { Header } from '../Header/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from '../Footer/index.js';
import { Loggin } from '../Loggin/index.js';
import { SearchDetail } from '../SearchDetail/index.js';
import { Admin } from '../Admin/index.js';
import { ClientDetail } from '../ClientDetail/index.js';
import { CreateClient } from '../CreateClient/index.js';

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
            <Route path="/admin/create-client" element={<CreateClient />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
}

export default App;
