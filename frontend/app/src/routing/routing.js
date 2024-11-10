import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from '../pages/loginForm';
import RegisterForm from '../pages/registerForm';
import Dashboard from '../pages/dashboard';

const Routing = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    );
  };
  
  export default Routing;