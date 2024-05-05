import React from "react";
import Rotas from "./routes";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <div className='flex h-screen'>
      <Navbar />
      <div className='w-full'>
        <Header />

        <Rotas />
        <ToastContainer />
      </div>
    </div>
    </>
  );
}

export default App;