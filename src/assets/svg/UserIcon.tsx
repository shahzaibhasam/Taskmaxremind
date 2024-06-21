/* eslint-disable max-len */
import Svg, { Path, Ellipse } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const UserIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 112 104"
			fill="none"
			
		>
			<Ellipse cx="56" cy="52" rx="56" ry="52" fill="#D9D9D9" />
			<Path
				d="M74.4817 37.0191C74.4817 45.6693 65.9934 52.6817 55.5231 52.6817C45.0525 52.6817 36.5645 45.6693 36.5645 37.0191C36.5645 28.3688 45.0525 21.3564 55.5231 21.3564C65.9934 21.3564 74.4817 28.3688 74.4817 37.0191Z"
				fill="white"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M55.5005 54.209C37.551 54.209 23 66.5234 23 81.7141H88.0009C88.0009 66.5234 73.45 54.209 55.5005 54.209Z"
				fill="white"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default UserIcon;
