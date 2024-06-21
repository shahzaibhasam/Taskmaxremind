/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const UserFilled: FC<SvgProps> = ({ width, height, iconColor = '#164978' }) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 15 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M10.7206 4.49596C10.7206 6.42672 9.11715 7.99191 7.13933 7.99191C5.16147 7.99191 3.55811 6.42672 3.55811 4.49596C3.55811 2.56519 5.16147 1 7.13933 1C9.11715 1 10.7206 2.56519 10.7206 4.49596Z"
				fill={iconColor}
				stroke={iconColor}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M7.13924 8.33301C3.74863 8.33301 1 11.0816 1 14.4722H13.2785C13.2785 11.0816 10.5299 8.33301 7.13924 8.33301Z"
				fill={iconColor}
				stroke={iconColor}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default UserFilled;
