import { TouchableOpacity, Text} from "react-native";
import React from 'react';
import styles from "../themes/styles";


const Hashtag = (props)=>(
  <TouchableOpacity
      elevation={5}
    style={ [styles.hashtag, props.additionalStyle] }
  > 
    <Text style={ [styles.hashtagInside, props.additionalStyle] }> { props.text } </Text>
  </TouchableOpacity>
);

export default Hashtag;