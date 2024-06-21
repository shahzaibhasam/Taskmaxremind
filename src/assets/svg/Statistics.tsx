/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const StatisticIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={width} viewBox="0 0 16 18" fill="none">
			<Path
				d="M15.0909 0.741211H12.0029V17.2592H15.0909V0.741211Z"
				fill={iconColor}
			/>
			<Path
				d="M9.54393 4.11328H6.45593V17.2583H9.54393V4.11328Z"
				fill={iconColor}
			/>
			<Path
				d="M3.99596 8.51855H0.907959V17.2596H3.99596V8.51855Z"
				fill={iconColor}
			/>
		</Svg>
	);
};

export default StatisticIcon;
