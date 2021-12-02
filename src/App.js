import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Reports from "./pages/reports/Reports";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <BrowserRouter>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Routes>
            <Route exact path='' element={<Home/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/reports' element={<Reports/>} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
