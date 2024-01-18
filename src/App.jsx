import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from "./components/login.jsx";
import AdminPage from "./components/AdminPage.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import { Header } from "./components/Header.jsx";
import Pricing from "./components/Pricing.jsx";
import Service from "./components/Service.jsx";
import Contact from "./components/Contact.jsx";
import { CartProvider } from './components/CartContext.jsx';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <CartProvider>
      <Router>
        <Header toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service" element={<Service />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
