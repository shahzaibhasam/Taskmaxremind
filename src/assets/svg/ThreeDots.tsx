/* eslint-disable max-len */
import Svg, { Circle } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const ThreeDots: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 3 10" fill="none">
			<Circle
				cx="1.25253"
				cy="1.25252"
				r="1.25"
				transform="rotate(89.8841 1.25253 1.25252)"
				fill="#2E476B"
			/>
			<Circle
				cx="1.26035"
				cy="5.00252"
				r="1.25"
				transform="rotate(89.8841 1.26035 5.00252)"
				fill="#2E476B"
			/>
			<Circle
				cx="1.26816"
				cy="8.75252"
				r="1.25"
				transform="rotate(89.8841 1.26816 8.75252)"
				fill="#2E476B"
			/>
		</Svg>
	);
};

export default ThreeDots;
