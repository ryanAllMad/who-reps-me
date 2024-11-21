import React, { useEffect } from 'react';
import Animated, {
	useSharedValue,
	withTiming,
	useAnimatedStyle,
	withRepeat,
	Easing,
	withSequence
} from 'react-native-reanimated';
import { Text, Image } from 'react-native';

const Loading = ({ results, fetched }) => {
	const animatedWidth = useSharedValue(160);
	const color = useSharedValue('rgb(27, 75, 113)')
	useEffect(() => {
		if (!results && fetched) {
			color.value = withSequence(
				withTiming(color.value, {
				duration: 500,
				easing: Easing.inOut(Easing.quad)
				}), 
				withRepeat(
					withTiming('rgb(153, 29, 32)', {
						duration: 500,
						easing: Easing.inOut(Easing.quad)
					}), 
				-1, 
				true)
			)
		}
	}, [results, color, fetched]);

	return (
		<>
		{!results && fetched && <Animated.View
			style={[
				{
					width: animatedWidth,
					height: animatedWidth,
					backgroundColor: color,
					borderRadius: 100,
					alignContent: 'center',
					justifyContent: 'center',
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: [{ translateX: '-50%' }, {translateY: '-50%'}],
					zIndex: 5
				}
			]}
		>
			<Image style={{ width: 80, height: 80, left: 42.5 }} source={require('../../assets/capitol-white.png')} />
		</Animated.View>}
		</>
	);
};

export default Loading;
