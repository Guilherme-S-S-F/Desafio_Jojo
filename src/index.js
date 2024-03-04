import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, Routes, Route, RouterProvider, Router, BrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([

  {

    path: '/',

    element: <App/>

  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
        <Route path='/stand/:stand' element={<App/>} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
