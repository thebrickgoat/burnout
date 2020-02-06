//
//  App.js
//  Burnout
//
//  Created by thebrickgoat.
//  Copyright © 2018 thebrickgoat. All rights reserved.
//

import React from "react"
import Main from "./App/Main/Main"
import * as Font from "expo-font"
import { DangerZone, AppLoading } from "expo"
import { createStackNavigator, createAppContainer } from "react-navigation"

const PushRouteOne = createStackNavigator({
	Main: {
		screen: Main,
	},
}, {
	initialRouteName: "Main",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Europa-Light": require("./assets/fonts/15529.otf"),
			"Europa-Bold": require("./assets/fonts/15528.otf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
