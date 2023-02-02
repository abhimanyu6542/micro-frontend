import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import Contact from "./Pages/Contact";
// import Dashboard from "./Pages/Dashboard";
import Dashboard from "dashboard/Dashboard";
import Feature from "./Pages/Feature";
import Feature1 from "./Pages/Feature1";
import Home from "./Pages/Home";
import SideBar from "./Components/SideBar";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <BrowserRouter>
      <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/feature1" element={<Feature1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<> not found</>} />
        </Routes>    
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
