/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const CloneIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 12 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M2.85938 6.14085C2.85938 4.59395 2.85938 3.8205 3.34955 3.33994C3.83972 2.85938 4.62864 2.85938 6.20648 2.85938H7.88004C9.45786 2.85938 10.2468 2.85938 10.737 3.33994C11.2271 3.8205 11.2271 4.59395 11.2271 6.14085V8.87542C11.2271 10.4223 11.2271 11.1958 10.737 11.6763C10.2468 12.1569 9.45786 12.1569 7.88004 12.1569H6.20648C4.62864 12.1569 3.83972 12.1569 3.34955 11.6763C2.85938 11.1958 2.85938 10.4223 2.85938 8.87542V6.14085Z"
				stroke={iconColor}
				stroke-opacity="0.780392"
			/>
			<Path
				d="M2.67355 10.2975C1.74928 10.2975 1 9.56296 1 8.65678V5.3753C1 3.31276 1 2.2815 1.65356 1.64075C2.30713 1 3.35902 1 5.46281 1H7.69421C8.61852 1 9.36777 1.73459 9.36777 2.64074"
				stroke={iconColor}
				stroke-opacity="0.780392"
			/>
		</Svg>
	);
};

export default CloneIcon;
