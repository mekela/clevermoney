import { View, TextInput} from "react-native";
import React from 'react';
import styles from "../themes/styles";


const Input = (props) => (

    <View style={[styles.inputWrapper, props.additionalStyle]}>
      <TextInput placeholderTextColor="#aaa" textInputProps={{underlineColorAndroid:'white'}} {...props} />
    </View>
  )


export default Input;