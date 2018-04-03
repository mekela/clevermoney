import { View, Text} from "react-native";
import React from 'react';
import styles from "../themes/styles";


const Header = (props)=>(
  <View
    style={ styles.header }
  >
    <Text style={ styles.headerText }> { props.title || 'Awesome project'  } </Text>
  </View>
);

export default Header;