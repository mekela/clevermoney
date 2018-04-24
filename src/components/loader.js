import { Text } from "react-native";
import React from 'react';
import { generalStyle } from "../themes/styles";

const Loader = (props)=>(
  <Text style={ generalStyle.loading }>Loading...</Text>
);

export default Loader;