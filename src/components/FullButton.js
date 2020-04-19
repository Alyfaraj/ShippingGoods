import React from 'react'
import {Button, Text } from 'native-base';
import Colors from '../constants/Colors';
const FullButton = (props) => {
    return (
            <Button  rounded  light  style={{backgroundColor:Colors.primary,justifyContent:'center'}} onPress={props.onPress} >
                <Text  style={{color:"#fff"}}>{props.title}</Text>
            </Button>
    )
}

export default FullButton