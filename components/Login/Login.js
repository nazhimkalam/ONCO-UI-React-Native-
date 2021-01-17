import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import React, { useEffect, useState } from 'react';
import { Animated, Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginWelcome from './LoginWelcome';

const Login = () => {
	const [displayWelcome, setDisplayWelcome] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const opacity = useState(new Animated.Value(0.1))[0];
	const [validEmail, setValidEmail] = useState(true);
	const [validPassword, setValidPassword] = useState(true);

	// this is to update the displayWelcome component after a given time
	useEffect(() => {
		setTimeout(() => {
			setDisplayWelcome(false);
			// fading animations
			Animated.timing(opacity, {
				toValue: 1,
				duration: 1500,
			}).start();
		}, 1000);
	}, []);

	const onClickLogin = () => {
		// check if the user has filled both email and the password
		if (!email && !password) {
			setEmail('Enter Email Address!');
			setPassword('Enter Password!');
			setValidEmail(false);
			setValidPassword(false);
		} else if (password.length < 6) {
			setPassword('Enter at least 6 characters!');
			setValidPassword(false);
		} else if (password !== 'Enter at least 6 characters!' && password !== 'Enter Password!') {
			setValidPassword(true);
		} else {
			setValidPassword(false);
		}

		// check for email format but anyways checking will be further done by FIREBASE
		if (!email.includes('@')) {
			setEmail('Invalid Email Format!');
			setValidEmail(false);
		} else if(email !== "Enter Email Address!" && email !== "Invalid Email Format!"){
			setValidEmail(true);
		}else{
			setValidEmail(false);
		}
		// validate the password to be more than or equal to at least 6 characters

		// then we are good to check with firebase and proceed (we can do email validation with firebase as well)

		// once all the firebase stuff is completed we reset the fields
		// setEmail();
		// setPassword();
	};

	const onClickGoogleLogin = () => {
		console.log('You Clicked Google Auth Login');
	};
	const onClickForgetPassword = () => {
		console.log('You Clicked forget password');
	};
	const onClickSignUp = () => {
		console.log('You Clicked Sign Up');
	};
	const onClickRegister = () => {
		console.log('You Clicked register');
	};
	const onClickSignIn = () => {
		console.log('You Clicked Sign in');
	};

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
									style={[style.login__inputContainerInputs, !validEmail && style.invalidTextContent]}
									onChangeText={(text) => {
										setEmail(text);
										setValidEmail(true);
									}}
									textContentType="emailAddress"
									placeholder="Email Address"
									value={email}
									onFocus={() => setEmail('')}
								/>
							</View>
							<View style={style.login__inputContainerInputsSection}>
								<LockIcon />
								<TextInput
									style={[style.login__inputContainerInputs, !validPassword && style.invalidTextContent]}
									onChangeText={(text) => {
										setPassword(text);
										setValidPassword(true);
									}}
									textContentType="password"
									placeholder="Password"
									secureTextEntry={validPassword && true}
									value={password}
									onFocus={() => setPassword('')}
								/>
							</View>

							<Text style={style.login__forgotPasswordLink} onPress={onClickForgetPassword}>
								Forgot Password?
							</Text>
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
								Don't have an account?{' '}
								<Text style={style.login__signUp} onPress={onClickSignUp}>
									Sign Up
								</Text>
							</Text>
						</View>
					</Animated.View>
				</>
			)}
		</SafeAreaView>
	);
};
const style = StyleSheet.create({
	container: {
		height: '100vh',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
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
	invalidTextContent: {
		color: 'red',
	},
	login__inputContainerInputs: {
		height: 20,
		color: 'grey',
		outline: 'none',
		borderWidth: 0,
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
});
export default Login;
