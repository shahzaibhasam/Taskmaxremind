/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const EmailIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 21 17" fill="none">
			<Path
				d="M2.03973 3.07915L8.48581 7.91366C9.59485 8.74541 11.1197 8.74541 12.2287 7.91366L18.6748 3.0791"
				stroke={iconColor}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M17.635 1H3.07938C1.93097 1 1 1.93097 1 
     3.07938V13.4763C1 14.6247 1.93097 15.5557 3.07938 15.5557H17.635C18.7835 15.5557 19.7144 14.6247 19.7144 13.4763V3.07938C19.7144 1.93097 18.7835 1 17.635 1Z"
				stroke={iconColor}
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</Svg>
	);
};

export default EmailIcon;
