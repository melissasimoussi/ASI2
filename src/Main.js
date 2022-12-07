import logo from './logo.svg';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Home } from './component/Home/home';
import SignIn from './component/Auth/auth';


export const Main =(props) =>{
  return (
  <>
      <BrowserRouter>
        <NavLink to="/login"> Login</NavLink>


          <div>
              <Routes>
                  <Route path='/login' element={<SignIn/>} />
                  <Route path='/' element={<Home/>} />
              </Routes>
          </div>
      </BrowserRouter>
  </>
);
}
export default Main;

