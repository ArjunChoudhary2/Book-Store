import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import MyFooter from "./components/MyFooter";
// import About from './pages/About'

function App() {
  return (
    <>
      <Nav />
      <div className="min-h-screen">
        <Outlet />
      </div>

      {/* <About/> */}
      <MyFooter />
    </>
  );
}

export default App;
