import React, { useEffect, useState } from 'react';
import {Card} from '../Card/containers/Card';
import { CardBoardDisplay } from '../Card/components/CardBoardDisplay';
import { View, ScrollView} from 'react-native'
import { List, ListItem} from 'semantic-ui-react';


export const CardFull=(props) =>{
    var [columns, setColumns] = useState([])

    useEffect(() => {
    fetch("http://vps.cpe-sn.fr:8083/cards")
    .then((response) => response.json())
    .then((data) =>{
        setColumns(data)
        
    });
    
},[])

let i=0;
let display=[];
 columns.map((item)=>{
    i=i+1;
    console.log(item)
    console.log(i)
    display.push((< Card key={i} name={item.name} url={item.imgUrl} energy={item.energy} hp={item.hp} description={item.description} family={item.family} attack={item.attack} defense={item.defense} money={item.money} display_type="FULL_LABEL"> </Card>));
});

return (<>{display}</>);
    
}
