import logo from './logo.svg';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Home } from './component/Home/home';
import SignIn from './component/Auth/auth';
import { Play } from './component/Game/play';
import { CardList } from './component/Market/CardList';


export const Main =(props) =>{
  return (
  <>
      <BrowserRouter>
        <NavLink to="/"> Login</NavLink>
        <NavLink to="/cards"> Cards</NavLink>
        <NavLink to="/home"> Home</NavLink>


          <div>
              <Routes>
                  <Route path='/home' element={<Home/>} />
                  <Route path='/cards' element={<CardList/>} />
                  <Route path='/' element={<SignIn/>} />
				  <Route path='/play' element={<Play/>} />

              </Routes>
          </div>
      </BrowserRouter>
      

  </>
);
}
export default Main;

