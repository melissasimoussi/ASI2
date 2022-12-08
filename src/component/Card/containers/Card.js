import React from 'react';
import {CardSimpleDisplay} from '../components/CardSimpleDisplay';
import {CardLineDisplay} from '../components/CardLineDisplay'

const LINE_LABEL='LINE';
const SIMPLE_LABEL='SIMPLE';

export const User=(props)=> {
    let display="";
    switch(props.display_type){
        case SIMPLE_LABEL:
            display = (      
                <CardSimpleDisplay
                    img = {props.img}
                    name={props.name}
                    money={props.money}>
                </CardSimpleDisplay>

            );

            break;
        case LINE_LABEL:
            display=(                
                <CardLineDisplay
                    img = {props.img}
                    name={props.name}
                    money = {props.money}>
                </CardLineDisplay>
            );
            break;
        default:
            display=(<h4>No Display Available</h4>);
    }
        return display;
    }
