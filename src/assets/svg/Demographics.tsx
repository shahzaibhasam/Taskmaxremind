/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const Demographics: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width="14" height="15" viewBox="0 0 14 15" fill="none">
			<Path
				d="M10.5583 4.33738C10.5583 6.18056 9.02759 7.67476 7.13948 7.67476C5.25134 7.67476 3.7207 6.18056 3.7207 4.33738C3.7207 2.49419 5.25134 1 7.13948 1C9.02759 1 10.5583 2.49419 10.5583 4.33738Z"
				stroke="white"
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M7.13908 8C3.90228 8 1.27832 10.6239 1.27832 13.8608H12.9998C12.9998 10.6239 10.3759 8 7.13908 8Z"
				stroke="white"
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default Demographics;
