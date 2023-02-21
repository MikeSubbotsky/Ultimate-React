import React, { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom"
import NotFound from './NotFound';
import Home from './Home';
import Task from '../RefCounterProject/Task';

function AppWrapper24() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <button className="btn btn-success fixed-top" style={{'top':'100px', 'left':'10px', 'width':'100px'}} onClick={e => {
      setIsLoggedIn(true);
      navigate("/new_project_24/home");
      }} >Log in</button>
    <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/home" element={<Home logIn={isLoggedIn}/>} />
          <Route path="/task" element={<Task logIn={isLoggedIn}/>} />
      </Routes>
    </>
  )
}

export default AppWrapper24;