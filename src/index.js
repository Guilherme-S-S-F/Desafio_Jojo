import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StandResult } from './components/StandResult';
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/result/:stand" element={<StandResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
