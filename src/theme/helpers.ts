import { Dimensions } from 'react-native';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleSize = (size: number): number => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const verticalScale = (size: number): number => (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5): number => size + (scaleSize(size) - size) * factor;

export const scaleFont = (size: number): number => size;

type CrossplatformShadow = {
	shadowColor: string;
	shadowOffset: { width: number; height: number };
	shadowOpacity: number;
	shadowRadius: number;
	elevation: number;
};

export function boxShadow(
	color: string,
	{ x, y } = { x: 2, y: 2 },
	radius = 8,
	opacity = 0.2,
	elevation = 2,
): CrossplatformShadow {
	return {
		shadowColor: color,
		shadowOffset: {
			width: x,
			height: y,
		},
		shadowOpacity: opacity,
		shadowRadius: radius,
		elevation: elevation,
	};
}
