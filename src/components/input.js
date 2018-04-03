import { View, TextInput} from "react-native";
import React from 'react';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from "../themes/styles";


const Input = (props) => (

    <View style={[styles.inputWrapper, props.additionalStyle]}>
      <View style={styles.iconWrapper}>
        {/*<Icon name={ props.icon } size={20} color="#fcfcfd" style={styles.inputIcon}/>*/}
      </View>
      <TextInput placeholder={ props.placeholder } placeholderTextColor="#fcfcfd"/>
    </View>
  )


export default Input;