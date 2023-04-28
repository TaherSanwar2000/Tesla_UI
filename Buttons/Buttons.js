import React from "react";
import { Pressable, Text, View } from 'react-native';
import styles from './styles'
const Buttons = (props)=>{

const type = props.type;
const content = props.content;


const backgroundColor = type === 'primary'?'black':'white';
const textColor = type === 'primary'?'white':'black';

    return(
        <View style={styles.container}>
            <Pressable style={[styles.button,{backgroundColor:backgroundColor}]}
            onPress={()=>{ }}>
            <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default Buttons;