/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const User: FC<SvgProps> = ({ width, height, iconColor = '#164978' }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 12 13" fill="none">
			<Path
				d="M8.55578 3.71747C8.55578 5.21829 7.30943 6.43494 5.77203 6.43494C4.23461 6.43494 2.98828 5.21829 2.98828 3.71747C2.98828 2.21665 4.23461 1 5.77203 1C7.30943 1 8.55578 2.21665 8.55578 3.71747Z"
				stroke={iconColor}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M5.77214 6.7002C3.13656 6.7002 1 8.83675 1 11.4723H10.5443C10.5443 8.83675 8.40773 6.7002 5.77214 6.7002Z"
				stroke={iconColor}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default User;
