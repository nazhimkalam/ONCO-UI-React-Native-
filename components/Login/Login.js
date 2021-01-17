import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import LoginWelcome from './LoginWelcome';

const Login = () => {
	const [displayWelcome, setDisplayWelcome] = useState(true);

	// this is to update the displayWelcome component after a given time
	useEffect(() => {
		setTimeout(() => {
			setDisplayWelcome(false);
		}, 2000);
	}, []);

	return (
		<View style={style.container}>
			{displayWelcome ? (
				<>
					<LoginWelcome />
				</>
			) : (
				<>
					<Text>Login Now!</Text>
				</>
			)}
		</View>
	);
};
const style = {
	container: {
		height: '100vh',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
};
export default Login;
