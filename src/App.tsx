import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import LoginHebrew from './pages/LoginHebrew';
import SignUp from './pages/SignUp';
import SignUpHebrew from './pages/SignUpHebrew';
import Home from './pages/Home';
import HomeHebrew from './pages/HomeHebrew';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/index" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/hebrew" element={<LoginHebrew />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/hebrew" element={<SignUpHebrew />} />
        <Route path="/index" element={<Home />} />
        <Route path="/index/hebrew" element={<HomeHebrew />} />
      </Routes>
    </div>
  );
}

export default App;
