import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import GestaoColaboradores from "./components/GestaoColaboradores";

function App() {
  return (
    <div className="h-screen flex">
      <Navbar />
      <div className="flex flex-col w-full">
      <Header />
      <GestaoColaboradores />
      </div>
      
    </div>
    );
}

export default App;
