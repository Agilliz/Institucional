import React from "react";
import Rotas from "./routes";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
    <div className='flex h-screen'>
      <Navbar />
      <div className='w-full'>
        <Header />
        <Rotas />
      </div>
    </div>
    </>
  );
}

export default App;