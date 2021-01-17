import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import React, { useEffect, useState } from 'react';
import { Animated, Button, Image, SafeAreaView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginWelcome from './LoginWelcome';

const Login = () => {
	const [displayWelcome, setDisplayWelcome] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const opacity = useState(new Animated.Value(0.1))[0];

	// this is to update the displayWelcome component after a given time
	useEffect(() => {
		setTimeout(() => {
			setDisplayWelcome(false);
			// fading animations
			Animated.timing(opacity, {
				toValue: 1,
				duration: 1500,
			}).start();
		}, 5000);
	}, []);

	const onClickLogin = () => {};
	const onClickGoogleLogin = () => {};

	return (
		<SafeAreaView style={style.container}>
			{displayWelcome ? (
				<>
					<LoginWelcome />
				</>
			) : (
				<>
					<Animated.View
						style={{
							backgroundColor: '#DEF9FF',
							flex: '1',
							justifyContent: 'space-between',
							opacity,
						}}
					>
						{/* header */}
						<View style={style.login__header}>
							<Image style={style.logo} source={require('../../assets/oncoAssets/oncoLogo.svg')} />
						</View>

						{/* welcome back */}
						<View style={style.login__welcomeBack}>
							{/* <Image style={style.whiteCloud} source={require('../../assets/oncoAssets/whiteCloud.svg')} /> */}
							<Text style={style.login__welcomeBackMessage}>Welcome back!</Text>
						</View>

						{/* login inputs */}
						<View style={style.login__inputContainer}>
							<Text style={style.login__inputContainerLoginDetails}>Log in to your existing account</Text>
							<View style={style.login__inputContainerInputsSection}>
								<PersonIcon />
								<TextInput
									style={style.login__inputContainerInputs}
									onChangeText={(text) => setEmail(text)}
									textContentType="emailAddress"
									placeholder="Email Address"
									value={email}
								/>
							</View>
							<View style={style.login__inputContainerInputsSection}>
								<LockIcon />
								<TextInput
									style={style.login__inputContainerInputs}
									onChangeText={(text) => setPassword(text)}
									textContentType="password"
									placeholder="Password"
									value={password}
								/>
							</View>

							<Text style={style.login__forgotPasswordLink}>Forgot Password?</Text>
						</View>

						{/* login button */}
						<View style={{ margin: 10 }}>
							<View style={style.login__buttons}>
								<Button onPress={onClickLogin} title="Login" color="#01CDFA" />
							</View>

							<Text style={{ alignSelf: 'center', margin: 15, fontWeight: 600, color: '#2c7c8c' }}>
								Or connect using Google
							</Text>

							{/* Google login */}
							<View style={style.login__buttonsGOOGLE}>
								<Button onPress={onClickGoogleLogin} bo title="Google" color="red" />
							</View>
						</View>

						{/* Sign Up Footer */}
						<View style={style.login__footer}>
							<Text style={{ alignSelf: 'center', fontWeight: 600, color: '#2c7c8c' }}>
								Don't have an account? <span style={style.login__signUp}>Sign Up</span>
							</Text>
						</View>
					</Animated.View>
				</>
			)}
		</SafeAreaView>
	);
};
const style = {
	container: {
		height: '100vh',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	// login__container: {
	// 	backgroundColor: '#DEF9FF',
	// 	flex: '1',
	// 	justifyContent: 'space-between',
	// 	opacity: opacity
	// },
	logo: {
		height: '25px',
		margin: '55px',
		resizeMode: 'contain',
	},
	login__header: {
		backgroundColor: '#01CDFA',
		height: '20vh',
	},
	login__welcomeBack: {
		alignItems: 'center',
	},
	login__welcomeBackMessage: {
		fontFamily: 'Arial',
		fontSize: '18px',
		fontWeight: '600',
		color: '#3f3f3f',
	},
	login__inputContainer: {
		margin: '30px',
	},
	login__inputContainerLoginDetails: {
		alignSelf: 'center',
		padding: 12,
		fontSize: 13,
		fontWeight: 600,
		color: '#2c7c8c',
	},
	login__inputContainerInputs: {
		height: 20,
		color: 'grey',
		outline: 'none',
		paddingLeft: '5px',
		flex: 1,
	},
	login__inputContainerInputsSection: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderRadius: '40px',
		flex: 1,
		margin: '5px',
		color: 'lightgrey',
		padding: 18,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	login__forgotPasswordLink: {
		alignSelf: 'flex-end',
		marginRight: 15,
		marginTop: 5,
		fontWeight: 600,
		color: '#2c7c8c',
	},
	login__buttons: { width: 120, alignSelf: 'center', borderRadius: 30, overflow: 'hidden' },
	login__buttonsGOOGLE: {
		width: 120,
		alignSelf: 'center',
		borderRadius: 5,
		overflow: 'hidden',
	},
	login__footer: {
		position: 'relative',
		backgroundColor: 'white',
		bottom: 0,
		padding: 15,
	},
	login__signUp: {
		color: '#01CDFA',
		fontWeight: 700,
	},
};
export default Login;
