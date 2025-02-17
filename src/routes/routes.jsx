import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from '../views/auth/RegisterForm';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;