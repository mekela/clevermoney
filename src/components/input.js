import { View, TextInput} from "react-native";
import React from 'react';
import styles from "../themes/styles";


const Input = (props) => (

    <View style={[styles.inputWrapper, props.additionalStyle]}>
      <TextInput {...props}  placeholder={ props.placeholder } placeholderTextColor="#aaa" underlineColorAndroid={'transparent'}  />
    </View>
  )


export default Input;