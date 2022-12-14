import React, { useEffect, useState } from 'react';
import {Card} from '../Card/containers/Card';
import { CardBoardDisplay } from '../Card/components/CardBoardDisplay';
import { View, ScrollView} from 'react-native'
import { List, ListItem} from 'semantic-ui-react';


export const CardBoard=(props) =>{
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
    display.push((< Card key={i} name={item.name} url={item.smallImgUrl} energy={item.energy} hp={item.hp} display_type="BOARD_LABEL"> </Card>));
});

return (<>{display}</>);
    
}
