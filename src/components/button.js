import { TouchableOpacity, Text} from "react-native";
import React from 'react';
import styles from "../themes/styles";


const Button = (props)=>(
  <TouchableOpacity
    style={ styles.button }
  >
    <Text style={ styles.buttonInside }> { props.text } </Text>
  </TouchableOpacity>
);

export default Button;