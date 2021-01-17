import React from 'react';
import { Image, View, Animated } from 'react-native';

function LoginWelcome() {
	const position = new Animated.ValueXY({ x: 1, y: 1 });

	Animated.timing(position, {
		toValue: { x: 0.7, y: -100 },
		duration: 2000,
	}).start();

	return (
		<View style={style.container}>
			<Animated.View
				style={{
					transform: [
						{
							translateY: position.y,
						},
						{ scale: position.x },
					],
				}}
			>
				<Image style={style.logo} source={require('../../assets/oncoAssets/oncoLogo.svg')} />
			</Animated.View>
		</View>
	);
}

const style = {
	container: {
		backgroundColor: '#00B9F2',
		flex: 1,
		paddingTop: '150px',
	},
	logo: {
		height: '35px',
		resizeMode: 'contain',
	},
};
export default LoginWelcome;
