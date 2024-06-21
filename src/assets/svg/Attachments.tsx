/* eslint-disable max-len */
import Svg from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const Attachments: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={height} viewBox="8 0 8 16" fill="none">
			{/* <Path d="M4.090ş2 15.4989C5.98124 15.4509 7.5 13.9024 7.5 12V12.4678C7.27534 14.1453 5.82879 15.4549 4.09032 15.4989ZM0.5 12C0.5 13.8788 1.98129 15.4124 3.83944 15.4964C2.13238 15.4195 0.721632 14.1227 0.5 12.4678V12ZM2.5 12C2.5 12.8281 3.17186 13.5 4 13.5C3.17164 13.5 2.5 12.8284 2.5 12Z" stroke="white"/> */}
		</Svg>
	);
};

export default Attachments;
