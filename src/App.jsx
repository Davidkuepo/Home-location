import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from './components/Layout';
import Home from './views/pages/Home';
import About from './views/pages/About';
import Login from './views/auth/LoginForm';
import Register from './views/auth/RegisterForm';
import NotFound from './views/pages/NotFound';

console.log("App.jsx is running");

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<Layout />}>
            <Route path="/about" element={<About />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;