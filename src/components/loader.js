import {Text, ActivityIndicator, View} from "react-native";
import React from 'react';
import styles from "../themes/styles";


const Loader = (props)=>(
	<View>
		<ActivityIndicator size="large" color="#0000ff" />
		{/*<Text>Loading...</Text>*/}
	</View>
);

export default Loader;