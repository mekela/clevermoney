import { View, Text} from "react-native";
import Header from "../components/header";
import Nav from "../components/nav";
import styles from "../themes/styles"


const Layout = (props)=> (
  <View style={ styles.container }>
    <Header title="welcome!!!"/>
    <View style={styles.content}>
      {props.children}
    </View>
    <Nav/>
  </View>
)

export default Layout;