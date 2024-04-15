import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import './index.css';
import Header from './components/Header';
// styles
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex h-screen'>
    <Navbar />
    <div className='w-full '>
  <Header /> 
    <App />
    </div>
    </div>
  </React.StrictMode>
);