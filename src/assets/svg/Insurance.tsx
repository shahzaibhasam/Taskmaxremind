/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const Insurance: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 16 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M5.375 8.51877L7.125 10.2023L10.625 6.83521M15 8.51877C15 12.274 10.2225 14.9952 8.56123 15.8279C8.38159 15.918 8.29172 15.963 8.16712 15.9864C8.07 16.0045 7.93 16.0045 7.83288 15.9864C7.70828 15.963 7.61841 15.918 7.43877 15.8279C5.77746 14.9952 1 12.274 1 8.51877V5.33482C1 4.66181 1 4.32531 1.11442 4.03605C1.21549 3.78051 1.37973 3.5525 1.59295 3.37173C1.83431 3.1671 2.16182 3.04895 2.81685 2.81264L7.50842 1.1201C7.69034 1.05448 7.78125 1.02166 7.87488 1.00865C7.95783 0.997117 8.04217 0.997117 8.12512 1.00865C8.21875 1.02166 8.30966 1.05448 8.49158 1.1201L13.1831 2.81264C13.8382 3.04895 14.1657 3.1671 14.407 3.37173C14.6202 3.5525 14.7845 3.78051 14.8855 4.03605C15 4.32531 15 4.66181 15 5.33482V8.51877Z"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default Insurance;
