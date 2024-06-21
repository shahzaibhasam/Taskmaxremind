import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const PlusIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 19 15" fill={iconColor}>
			<Path
				d="M1 7.5H17.7143"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<Path
				d="M9.35693 14V1"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</Svg>
	);
};

export default PlusIcon;
