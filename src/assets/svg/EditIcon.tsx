/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

// icon color #045FE1

const EditIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M10.4852 3.69781L3.94989 10.2332C3.36628 10.8223 1.62096 11.092 1.19702 10.7011C0.773073 10.3102 1.08138 8.56491 1.66499 7.9758L8.20032 1.44047C8.50209 1.15308 8.90428 0.995042 9.32096 1.00012C9.73763 1.0052 10.1358 1.17299 10.4305 1.46766C10.7251 1.76232 10.893 2.16052 10.898 2.57721C10.9031 2.9939 10.7451 3.39605 10.4577 3.69781H10.4852Z"
				stroke={iconColor}
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M10.9532 10.8887H5.99805"
				stroke={iconColor}
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default EditIcon;
