import logo from './logo.svg';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Home } from './component/Home/home';
import SignIn from './component/Auth/auth';


export const Main =(props) =>{
  const [currentUser,setCurrentUser]= useState({
    img:'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png',
    login:"TOTO",
    pwd:"oui",
    money:1000,

});

  return (
  <>
      <BrowserRouter>
        <NavLink to="/"> Login</NavLink>


          <div>
              <Routes>
                  <Route path='/' element={<SignIn/>} />
              </Routes>
          </div>
      </BrowserRouter>
  </>
);
}
export default Main;

