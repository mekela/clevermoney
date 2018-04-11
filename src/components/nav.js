import { View, Text} from "react-native";
import React from 'react';
import { Actions } from 'react-native-router-flux';
import styles from "../themes/styles";


const Nav = (props)=>(
  <View
    style={ styles.nav }
  >
    <Text onPress={Actions.restList}  >List of api</Text>
  </View>
);

export default Nav;