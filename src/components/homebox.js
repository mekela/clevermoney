import { TouchableOpacity, Text, Image, View} from "react-native";
import React from 'react';
import styles from "../themes/styles";
import {Actions} from "react-native-router-flux";


const Homebox = (props)=>(
  <TouchableOpacity
    onPress={props.press}
    style={ [styles.homeBox, props.additionalStyle] }
  >
    <View style= { styles.homeImageWrap } >
      <Image source={props.pic}
             style= { styles.homeImage }  />
    </View>
    <Text style={styles.homeImageText}> { props.text } </Text>
  </TouchableOpacity>
);

export default Homebox;