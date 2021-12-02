import './Home.css';
import HeaderHome from '../../components/header/HeaderHome';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';

function Home() {
  // for side bar
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="Home">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <HeaderHome collapsed={collapsed}/>
      <div className="auth-wrapper">
        <div className="auth-inner">
      <Routes>
            <Route exact path='' element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
