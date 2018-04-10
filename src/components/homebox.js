import { TouchableOpacity, Text, Image, View} from "react-native";
import React from 'react';
import styles from "../themes/styles";


const Homebox = (props)=>(
  <TouchableOpacity
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