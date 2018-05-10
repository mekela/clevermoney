import {View, Text, Image} from "react-native";
import React, {Component} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';

import Layout from "../components/layout"
import {getCafe} from '../actions/cafeActions';
import Loader from '../components/loader';

class itemScene extends Component {


	componentWillMount() {
		console.log(this.props.cafes);
	}

	renderRating(cafe) {
		const rating = [];
		for (let i = 0; i < cafe.rating; i++) {
			rating.push(<Icon key={5 - i} name="star" size={20} color="#f39c12"/>)
		}
		for (let i = 0; i < 5 - cafe.rating; i++) {
			rating.push(<Icon key={5 - i} name="star-o" size={20} color="#f39c12"/>)
		}
		return rating;
	}

	renderCafe() {
		const cafe = this.props.cafes.current;
		return <View>
			<Image  source={cafe.image}/>
			<View >
				<Text >{cafe.name}</Text>
				<View >{this.renderRating(cafe)}</View>
			</View>

		</View>
	}

	render() {
		console.log(this.props.cafes);
		return (
			<Layout>
				{this.props.cafes?this.renderCafe():<Loader/>}
			</Layout>
		)
	}
}

const mapStateToProps = ({cafes}) => {
	return {cafes}
}
export default connect(mapStateToProps)(itemScene);