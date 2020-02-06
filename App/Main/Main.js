//
//  Main
//  Burnout
//
//  Created by thebrickgoat.
//  Copyright © 2018 thebrickgoat. All rights reserved.
//

import { Text, Animated, Easing, StyleSheet, View, Image } from "react-native"
import React from "react"


export default class Main extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
			group7ImageRotate: new Animated.Value(-1),
			group8ImageRotate: new Animated.Value(-1),
		}
	}

	componentDidMount() {
	
		this.startAnimationOne()
	}

	startAnimationOne() {
	
		// Set animation initial values to all animated properties
		this.state.group8ImageRotate.setValue(0)
		this.state.group7ImageRotate.setValue(0)
		
		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.group8ImageRotate, {
			duration: 60000,
			easing: Easing.bezier(0, 0, 1, 1),
			toValue: 1,
		})]), Animated.parallel([Animated.timing(this.state.group7ImageRotate, {
			duration: 35000,
			easing: Easing.bezier(0, 0, 1, 1),
			toValue: 1,
		})])]).start()
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 823,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/group-5-2.png")}
								style={styles.group5Image}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 207,
								right: 206,
								top: 0,
								height: 675,
							}}>
							<Text
								style={styles.theSunWillGoSupeText}>The sun will go supernova and swallow the earth in about…</Text>
							<Text
								style={styles.factText}>This is a fact that you should maybe look up before that happens.</Text>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Animated.View
						style={[{
							transform: [{
								rotate: this.state.group7ImageRotate.interpolate({
									inputRange: [-1, 0, 1],
									outputRange: ["0deg", "0deg", "-360deg"],
								}),
							}],
						}, styles.group7ImageAnimated]}>
						<Image
							source={require("./../../assets/images/group-7.png")}
							style={styles.group7Image}/>
					</Animated.View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Animated.View
						style={[{
							transform: [{
								rotate: this.state.group8ImageRotate.interpolate({
									inputRange: [-1, 0, 1],
									outputRange: ["0deg", "0deg", "360deg"],
								}),
							}],
						}, styles.group8ImageAnimated]}>
						<Image
							source={require("./../../assets/images/group-8.png")}
							style={styles.group8Image}/>
					</Animated.View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						style={styles.group6View}>
						<Text
							style={styles.timerDisplayText}>157680000000000000000</Text>
						<Text
							style={styles.secondsText}>years.</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	group5Image: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 747,
		height: 823,
	},
	theSunWillGoSupeText: {
		color: "white",
		fontFamily: "Europa-Light",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	factText: {
		color: "white",
		fontFamily: "Europa-Light",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	group7Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	group7ImageAnimated: {
		width: 213,
		height: 216,
	},
	group8Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
	group8ImageAnimated: {
		width: 254,
		height: 257,
	},
	group6View: {
		backgroundColor: "transparent",
		width: 334,
		height: 134,
	},
	timerDisplayText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Europa-Bold",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 286,
		top: 0,
	},
	secondsText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Europa-Bold",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
	},
})
