import React, { useEffect } from 'react';

export const CardList=(props) =>{
    
    useEffect(() => {
    fetch("http://tp.cpe.fr:8083/cards")
    .then((response) => response.json())
    .then((data) =>{
        props.name = data.name;
        props.id = data.id;
        console.log(data);
    });
},[])

//var myObject = JSON.parse(myjsonstring);

}
