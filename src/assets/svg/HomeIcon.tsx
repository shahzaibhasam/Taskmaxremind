/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const HomeIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 23 21" fill="none">
			<Path
				d="M1.28394 9.85054L11.6419 1.17676L21.9999 9.85054"
				stroke={iconColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M19.2428 7.79785L19.2428 17.6318C19.2428 17.9707 19.176 18.3062 19.0463 18.6192C18.9167 18.9322 18.7266 19.2167 18.487 19.4563C18.2474 19.6959 17.963 19.8859 17.65 20.0156C17.3369 20.1452 17.0014 20.212 16.6626 20.212L6.61776 20.212C5.93346 20.212 5.27719 19.9401 4.79331 19.4563C4.30944 18.9724 4.0376 18.3161 4.0376 17.6318L4.0376 7.79785"
				stroke={iconColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M14.2257 12.7793L9.05823 12.7793L9.05823 20.2084L14.2257 20.2084L14.2257 12.7793Z"
				stroke={iconColor}
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export default HomeIcon;
