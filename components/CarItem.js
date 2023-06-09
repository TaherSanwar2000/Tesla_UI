import React from "react";
import { Text, View,ImageBackground } from 'react-native';
import styles from './styles'
import Buttons from '../Buttons/Buttons'

const CarItem = (props) => {

    const{name,tagline,taglineCTA,image} = props.car;
    return(
        <View style={styles.carContainer}>
        <ImageBackground source={image}
        style={styles.image}/>
      <View style = {styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}{' '}
        <Text style={styles.subtitleCta}>
        {taglineCTA}
        </Text>
        </Text>
      </View>
     <View style={styles.buttonContainer}>
     <Buttons 
      type="primary"
      content="Custom Order"/>
      <Buttons 
      type="secondary"
      content="Existing Inventory"/>
     </View>
    </View>
    );
};

export default CarItem;
