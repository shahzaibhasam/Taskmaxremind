/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const CareTeam: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M10.5583 4.64304C10.5583 6.48623 9.02759 7.98042 7.13948 7.98042C5.25134 7.98042 3.7207 6.48623 3.7207 4.64304C3.7207 2.79986 5.25134 1.30566 7.13948 1.30566C9.02759 1.30566 10.5583 2.79986 10.5583 4.64304Z"
				stroke="white"
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M7.13908 8.30566C3.90228 8.30566 1.27832 10.9296 1.27832 14.1664H12.9998C12.9998 10.9296 10.3759 8.30566 7.13908 8.30566Z"
				stroke="white"
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default CareTeam;
