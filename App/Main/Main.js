//
//  Main
//  Burnout
//
//  Created by thebrickgoat.
//  Copyright © 2018 thebrickgoat. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, View, Text, Animated, Easing, Linking } from "react-native"

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
			timer: 0,
			randomText: "sting", 
			randomUrl: "sting"
		}
	}

	startTimer = () => {
		var sts = 680000000000000;
		var t1 = new Date();
		var t1s = (new Date(t1)).getTime()
		var t2 = new Date(1995, 11, 17, 3, 24, 0);
		var t2s = (new Date(t2)).getTime();
		var dif = t1 - t2s;
		var deathTime = sts - dif
		this.state.timer = deathTime;
		this.clockCall = setInterval(() => {
			this.decrementClock();
		}, 1000);
	}

	decrementClock = () => {
		if (this.state.timer === 0) clearInterval(this.clockCall);
		this.setState((prevstate) => ({ timer: prevstate.timer - 1 }));
	}

	generateFact = () => {
		const facts = [
			{id: 1, title: 'eat a good meal', content: 'things to eat before you die'},
			{id: 2, title: 'read a good book', content: 'best books to read before you die'},
			{id: 3, title: 'go to a state park', content: 'best state parks'},
			{id: 4, title: 'make a puppet of yourself', content: 'how to make a muppet'},
		];
		var fact = facts[facts.length * Math.random() | 0]
		this.state.randomUrl = "https://www.google.com/search?q=" + fact.content
		this.state.randomText = fact.title
	}
	
	componentDidMount() {
		this.startAnimationOne();
		this.startTimer();
		this.generateFact();
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
		})])]).start(() => {
			this.startAnimationOne();
		});
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
						height: "100%",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "fixed",
							top: 0,
							right: "41%",
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/group-5-2.png")}
							style={styles.group5Image} />
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							padding: 25,
							top: "5%",
							width: "100%"
						}}>
						<Text
							style={styles.theSunWillGoSupeText}>The sun will go supernova and swallow the earth in about…</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							padding: 25,
							bottom: "5%",
							width: "100%"
						}}>
						<Text
							style={styles.factText} 
							onPress={() => Linking.openURL(this.state.randomUrl)}>
							Before that happens, you should {this.state.randomText}.
							</Text>
					</View>
				</View>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					position: "absolute",
					alignSelf: "center",
					top: 2,
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
						style={styles.group7Image} />
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
						style={styles.group8Image} />
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
					width: "100%",
					textAlign: "center"

				}}>
				<View
					style={styles.group6View}>
					<Text
						style={styles.timerDisplayText}>156{this.state.timer}</Text>
					<Text
						style={styles.secondsText}>seconds.</Text>
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
		resizeMode: "cover",
		backgroundColor: "black",
		height: "100%",
	},
	theSunWillGoSupeText: {
		color: "white",
		fontFamily: "Europa-Light",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	factText: {
		color: "white",
		fontFamily: "Europa-Light",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	group7ImageAnimated: {
		width: 213,
		height: 216,
	},
	group7Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: "101%",
		height: "101%",
	},
	group8Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: "101%",
		height: "101%",
	},
	group8ImageAnimated: {
		width: 254,
		height: 257,
	},
	group6View: {
		backgroundColor: "transparent",

	},
	timerDisplayText: {
		color: "white",
		fontFamily: "Europa-Bold",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
	},
	secondsText: {
		color: "white",
		fontFamily: "Europa-Bold",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		left: 0,
		right: 0,
		bottom: 0,
	},
})