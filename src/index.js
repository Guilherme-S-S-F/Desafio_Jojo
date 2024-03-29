import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StandResult } from './components/StandResult';
import { HashRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/result/:stand" element={<StandResult />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
