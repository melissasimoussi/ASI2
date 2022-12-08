import React from 'react';
import { Image, List, ListItem, View, ScrollView} from 'semantic-ui-react';

 export const CardLineDisplay=(props) =>{
    return (
        <View>
        <ScrollView horizontal = {true}>
        <List>
            <List.Item>  
                {props.img}
            </List.Item>
            <ListItem>
                {props.name}
            </ListItem>
            <ListItem>
                {props.money} $
            </ListItem>

        </List>
        </ScrollView>
        </View>
        );
}