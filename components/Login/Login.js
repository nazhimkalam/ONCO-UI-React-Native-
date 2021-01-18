import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import React, { useEffect, useState } from 'react';
import { Alert, Animated, Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
	const [clickForgetPassword, setClickForgetPassword] = useState(false);
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [validNewPassword, setValidNewPassword] = useState(true);
	const [validConfirmPassword, setValidConfirmPassword] = useState(true);
	const [clickedSignUp, setClickedSignUp] = useState(false);

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
		} else if (email !== 'Enter Email Address!' && email !== 'Invalid Email Format!') {
			setValidEmail(true);
		} else {
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
	const onClickSignUp = () => {
		console.log('You Clicked Sign Up');
	};
	const onClickRegister = () => {
		console.log('You Clicked register');
	};
	const onClickSignIn = () => {
		console.log('You Clicked Sign in');
	};

	const onClickConfirmChangePass = () => {
		// checking if the new password and confirm password is more than 5 chars and both are equal

		if (!newPassword && !confirmPassword) {
			setNewPassword('Enter New Password!');
			setConfirmPassword('Enter Confirm New Password!');
			setValidNewPassword(false);
			setValidConfirmPassword(false);
		} else if (newPassword.length < 6) {
			setNewPassword('Enter at least 6 characters!');
			setValidNewPassword(false);
		} else if (confirmPassword.length < 6) {
			setConfirmPassword('Enter at least 6 characters!');
			setValidConfirmPassword(false);
		} else if (newPassword !== confirmPassword) {
			setConfirmPassword('Invalid Confirm Password!');
			setValidConfirmPassword(false);
		} else {
			// This means all good to go

			// displays an alert on if any errors occurred or success message
			Alert.alert(
				'Alert Title',
				'My Alert Msg',
				[
					{
						text: 'Ask me later',
						onPress: () => console.log('Ask me later pressed'),
					},
					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel',
					},
					{ text: 'OK', onPress: () => console.log('OK Pressed') },
				],
				{ cancelable: false }
			);

			// redirecting when the password is RESET!
			setClickForgetPassword(false);
			setNewPassword('');
			setValidConfirmPassword(true);
			setValidNewPassword(true);
			setConfirmPassword('');
		}
	};

	const onClickForgotPassword = () => {
		setClickedSignUp(false);

		let isEmailValidAndPresentInFirebase = true;

		// we set the click forget password to true only when the user has entered valid email stored in the firebase
		if (isEmailValidAndPresentInFirebase) {
			setClickForgetPassword(true);
			setEmail('');
			setPassword('');
			setValidEmail(true);
			setValidPassword(true);
		} else {
			setEmail('This Email is not Registered or invalid!');
			setValidEmail(false);
		}
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
							{!clickForgetPassword ? (
								<>
									<Text style={style.login__inputContainerLoginDetails}>Log in to your existing account</Text>

									{/* This is the section when the user didn't click the forget button */}
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

									<Text style={style.login__forgotPasswordLink} onPress={onClickForgotPassword}>
										Forgot Password?
									</Text>
								</>
							) : (
								<>
									<Text style={style.login__inputContainerLoginDetails}>Change your password</Text>

									{/* This is the section when the user has clicked the forget password section */}
									<View style={style.login__inputContainerInputsSection}>
										<LockIcon />
										<TextInput
											style={[style.login__inputContainerInputs, !validNewPassword && style.invalidTextContent]}
											onChangeText={(text) => {
												setNewPassword(text);
												setValidNewPassword(true);
											}}
											textContentType="password"
											placeholder="New Password"
											secureTextEntry={validNewPassword && true}
											value={newPassword}
											onFocus={() => setNewPassword('')}
										/>
									</View>
									<View style={style.login__inputContainerInputsSection}>
										<LockIcon />
										<TextInput
											style={[style.login__inputContainerInputs, !validConfirmPassword && style.invalidTextContent]}
											onChangeText={(text) => {
												setConfirmPassword(text);
												setValidConfirmPassword(true);
											}}
											textContentType="password"
											placeholder="Confirm Password"
											secureTextEntry={validConfirmPassword && true}
											value={confirmPassword}
											onFocus={() => setConfirmPassword('')}
										/>
									</View>
									<Text
										style={style.login__forgotPasswordLink}
										onPress={() => {
											setClickForgetPassword(false);
											setNewPassword('');
											setValidConfirmPassword(true);
											setValidNewPassword(true);
											setConfirmPassword('');
											setClickedSignUp(false);
										}}
									>
										Go back
									</Text>
								</>
							)}
						</View>

						{/* login button */}
						<View style={{ margin: 10 }}>
							{clickForgetPassword ? (
								<View style={style.login__buttons}>
									<Button onPress={onClickConfirmChangePass} title="Confirm" color="#01CDFA" />
								</View>
							) : clickedSignUp ? (
								<View style={style.login__buttons}>
									<Button onPress={onClickSignUp} title="Sign Up" color="#01CDFA" />
								</View>
							): (
								<View style={style.login__buttons}>
									<Button onPress={onClickLogin} title="Login" color="#01CDFA" />
								</View>
							)}

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
								{!clickedSignUp ? (
									<>
										Don't have an account?{' '}
										<Text
											style={style.login__signUp}
											onPress={() => {
												setClickedSignUp(true);
											}}
										>
											Sign Up
										</Text>
									</>
								) : (
									<>
										
										<Text
											style={style.login__signUp}
											onPress={() => {
												setClickedSignUp(false);
											}}
										>
											Sign In
										</Text>
										{" "}to your account.
									</>
								)}
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
