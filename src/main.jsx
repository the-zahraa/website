import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services/web-design" element={<div>Web Design Page</div>} />
        <Route path="/services/web-development" element={<div>Web Development Page</div>} />
        <Route path="/services/telegram-bots" element={<div>Telegram Bots Page</div>} />
        <Route path="/services/smart-contracts" element={<div>Smart Contracts Page</div>} />
        <Route path="/services/auditing" element={<div>Auditing Page</div>} />
        <Route path="/book-a-call" element={<div>Book a Call Page</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);