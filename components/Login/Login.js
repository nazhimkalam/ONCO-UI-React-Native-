import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginWelcome from './LoginWelcome';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';

const Login = () => {
	const [displayWelcome, setDisplayWelcome] = useState(true);
	const [email, setEmail] = useState('Email Address');
	const [password, setPassword] = useState('Password');

	// this is to update the displayWelcome component after a given time
	useEffect(() => {
		setTimeout(() => {
			setDisplayWelcome(false);
		}, 5000);
	}, []);

	const onClickLogin = () => {};
	const onClickGoogleLogin = () => {};

	return (
		<View style={style.container}>
			{displayWelcome ? (
				<>
					<LoginWelcome />
				</>
			) : (
				<>
					<View style={style.login__container}>
						{/* header */}
						<View style={style.login__header}>
							<Image style={style.logo} source={require('../../assets/oncoAssets/oncoLogo.svg')} />
						</View>

						{/* welcome back */}
						<View style={style.login__welcomeBack}>
							{/* <View style={{ width: '50vw', height: 100, }}>
								<Image style={style.whiteCloud} source={require('../../assets/oncoAssets/whiteCloud.svg')} />
								<Image style={style.darkCloud} source={require('../../assets/oncoAssets/darkBlue.svg')} />
							</View>
							<View style={{ width: '50vw', height: 150 }}>
								<Image style={style.lightCloud} source={require('../../assets/oncoAssets/lightBlue.svg')} />
							</View> */}
							<Image style={style.whiteCloud} source={require('../../assets/oncoAssets/whiteCloud.svg')} />
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
									value={email}
								/>
							</View>
							<View style={style.login__inputContainerInputsSection}>
								<LockIcon />
								<TextInput
									style={style.login__inputContainerInputs}
									onChangeText={(text) => setPassword(text)}
									textContentType="password"
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
					</View>
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
	login__container: {
		backgroundColor: '#DEF9FF',
		flex: '1',
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
		// border: '1px black solid',
	},
	// whiteCloud: { resizeMode: 'contain', height: 250, width: 250, border: '1px red solid'},
	// darkCloud: { resizeMode: 'contain', height: 150, border: '1px black solid' },
	// lightCloud: { resizeMode: 'contain', height: 300, width: 250, border: '1px black solid' },
	login__welcomeBack: {
		// flex: 1,
		alignItems: 'center',
		// border: '1px black solid',
		// flexDirection: 'row',
		// flexWrap: 'wrap',
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
		// border: '1px black solid',
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
