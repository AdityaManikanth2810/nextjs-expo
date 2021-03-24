// @generated: @expo/next-adapter@2.1.63
import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './home';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import theme from '../theme';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
				<Home />
				<StatusBar style='auto' />
			</ApplicationProvider>
		</>
		// <View style={styles.container}>
		// 	<Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
		// 	<StatusBar style='auto' />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
	},
});

//TODO:
// Add Absolute Path
// ESLint and Prettier Config
// Add Navigation
