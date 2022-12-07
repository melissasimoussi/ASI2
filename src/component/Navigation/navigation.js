import React, { useState } from 'react';
import { User } from '../User/containers/User';

export const Navigation = (props)=>{
    const [currentUser,setCurrentUser]= useState({
        img:'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png',
        login:"TOTO",
        pwd:"oui",
        money:1000,
    
    });
    return (
        <><div>
            <User id={currentUser.id}
                      login={currentUser.login}
                      pwd={currentUser.pwd}
                      money={currentUser.money}
                      img={currentUser.img}
                      display_type='MONEY'>
            </User>


        </div><div>

            </div><div>
            <User id={currentUser.id}
                      login={currentUser.login}
                      pwd={currentUser.pwd}
                      money={currentUser.money}
                      img={currentUser.img}
                      display_type='SHORT'>
              </User>

            </div></>

    );
}