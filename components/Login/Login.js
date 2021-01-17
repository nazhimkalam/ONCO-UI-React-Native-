import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginWelcome from './LoginWelcome';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const Login = () => {
	const [displayWelcome, setDisplayWelcome] = useState(false);
	const [email, setEmail] = useState('Email Address');
	const [password, setPassword] = useState('Password');

	// this is to update the displayWelcome component after a given time
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setDisplayWelcome(false);
	// 	}, 5000);
	// }, []);

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
							<TextInput
								style={style.login__inputContainerInputs}
								onChangeText={(text) => setEmail(text)}
								textContentType="emailAddress"
								value={<PersonOutlineOutlinedIcon /> +  " " + email}
							/>
							<TextInput
								style={style.login__inputContainerInputs}
								onChangeText={(text) => setPassword(text)}
								textContentType="password"
								value={password}
							/>
							<Text style={{ alignSelf: 'flex-end' }}>Forgot Password?</Text>
						</View>

						{/* login button */}

						{/* Google login */}

						{/* Sign Up Footer */}
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
	},
	logo: {
		height: '20px',
		margin: '30px',
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
		border: '1px black solid',
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
		margin: '20px',
	},
	login__inputContainerLoginDetails: {
		alignSelf: 'center',
		padding: 10,
		fontSize: 13,
		fontWeight: 600,
		color: '#2c7c8c',
	},
	login__inputContainerInputs: { height: 20, borderColor: 'gray', borderWidth: 1 , padding:'20px'},
};
export default Login;
