/* eslint-disable max-len */
import Svg, { Rect } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const Box: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
			<Rect
				x="0.65"
				y="0.65"
				width="10.7"
				height="10.7"
				rx="1.35"
				stroke="#2E476B"
				stroke-width="1.3"
			/>
		</Svg>
	);
};

export default Box;
