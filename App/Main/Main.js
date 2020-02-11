//
//  Main
//  Burnout
//
//  Created by thebrickgoat.
//  Copyright © 2018 thebrickgoat. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, View, Text, Animated, Easing, Linking } from "react-native"

import * as firebase from 'firebase';
import '@firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBqWUaZtajwOLBDy8bNGwjs6tbmOYp7yVo",
	authDomain: "burn-out-92efd.firebaseapp.com",
	databaseURL: "https://burn-out-92efd.firebaseio.com",
	storageBucket: "burn-out-92efd.appspot.com",
	projectId: "burn-out-92efd"
};

firebase.initializeApp(firebaseConfig);

// enable offline reads

firebase.firestore().enablePersistence()
  .catch(function(err) {
	  if (err.code == 'failed-precondition') {} 
	  else if (err.code == 'unimplemented') {}
  });


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
			group7ImageRotate: new Animated.Value(0),
			group8ImageRotate: new Animated.Value(0),
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

		let facts = []
		var db = firebase.firestore().collection("things to do");
		db.get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				facts.push(doc.data());
			});
			var fact = facts[facts.length * Math.random() | 0]
			this.state.randomUrl = "https://www.google.com/search?q=" + fact.google
			this.state.randomText = fact.thing
		});
		
		//add to database
		//const factsBackup = [
		//];
		//factsBackup.forEach(element => {
			//db.add({
			//	thing: element.title,
			//	google: element.content
			//})
		//});
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
		Animated.loop(
			Animated.parallel([
				Animated.timing(this.state.group7ImageRotate, {
					duration: 50000,
					easing: Easing.bezier(0, 0, 1, 1),
					toValue: 1,
					delay: 0
				}),
				Animated.timing(this.state.group8ImageRotate, {
					duration: 50000,
					easing: Easing.bezier(0, 0, 1, 1),
					toValue: 1,
					delay: 0
				})
			])
		).start()
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
						height: "101%",
						backgroundColor: "#1C3B49"

					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "fixed",
							top: -8,
							right: 216,
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
							padding: 15,
							top: "4%",
							width: "100%"
						}}>
						<Text
							style={styles.bodyText}>The sun will swallow the earth in about…</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							margin:"5%",
							padding: 15,
							bottom: 0,
							width: "90%",
							borderColor:"white",
							borderWidth:"1px",
							borderRadius:"4"

						}}>
						<Text
							style={styles.bodyText}
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
	bodyButtonText: {
		color: "white",
		fontFamily: "Europa-Light",
		fontSize: 24,
		fontStyle: "normal",
		textAlign: "center",
		textShadowColor: 'rgba(0, 0, 0, 0.45)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 3
	},
	bodyText: {
		color: "white",
		fontFamily: "Europa-Light",
		fontSize: 24,
		fontStyle: "normal",
		textAlign: "center",
		textShadowColor: 'rgba(0, 0, 0, 0.45)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 3
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
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		textShadowColor: 'rgba(0, 0, 0, 0.45)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 3
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
		textShadowColor: 'rgba(0, 0, 0, 0.45)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 3
	},
})