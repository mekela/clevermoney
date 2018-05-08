import { View, Text} from "react-native";
import Header from "../components/header";
import Nav from "../components/nav";
import styles from "../themes/styles"
import React from "react";


const Layout = (props)=> (
	<View style={ styles.container }>
		<Header {...props}/>
		<View style={styles.content}>

			{props.children}

		</View>
		<Nav {...props}/>
	</View>

)

export default Layout;