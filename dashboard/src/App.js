import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";



function App() {
  return (
    <div className="App">
      <div className="h-screen flex" name="tela-inteira">
        <Navbar></Navbar>
        <div className="h-full w-full">
          <div name="topbar" className="h-24 pl-8 flex items-center">
            <TopNavbar children={"jnx"} id={123}></TopNavbar>
            <div name="topbar-nav" className="h-2/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
