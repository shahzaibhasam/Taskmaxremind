/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const CensucIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 43 45" fill="none">
			<Path
				d="M20.3529 43.4709H15.7647H11.1765H4.29412C3.02711 43.4709 2 42.4438 2 41.1768V4.47088C2 3.20387 3.02711 2.17676 4.29412 2.17676H36.4118C37.6788 2.17676 38.7059 3.20387 38.7059 4.47088V12.5003V17.6621"
				fill="white"
			/>
			<Path
				d="M20.3529 43.4709H15.7647H11.1765H4.29412C3.02711 43.4709 2 42.4438 2 41.1768V4.47088C2 3.20387 3.02711 2.17676 4.29412 2.17676H36.4118C37.6788 2.17676 38.7059 3.20387 38.7059 4.47088V12.5003V17.6621"
				stroke={iconColor}
				stroke-linecap="round"
				stroke-linejoin="round"
				strokeWidth={2}
			/>
			<Path
				d="M35.9946 26.2646C38.7589 26.2646 40.9999 28.4216 40.9999 31.0823C40.9999 34.546 37.663 37.5058 35.9946 39.1117C34.8823 40.1823 33.4918 41.2529 31.8234 42.3235C30.155 41.2529 28.7646 40.1823 27.6523 39.1117C25.9839 37.5058 22.647 34.546 22.647 31.0823C22.647 28.4216 24.888 26.2646 27.6523 26.2646C29.3933 26.2646 30.9267 27.1202 31.8234 28.4183C32.7202 27.1202 34.2536 26.2646 35.9946 26.2646Z"
				fill="white"
				stroke={iconColor}
				strokeWidth={2}
				stroke-linejoin="round"
			/>
			<Path d="M11.1765 11.3535H29.5295H11.1765Z" fill="white" />
			<Path
				d="M11.1765 11.3535H29.5295"
				stroke={iconColor}
				strokeWidth={2}
				stroke-linecap="round"
			/>
		</Svg>
	);
};

export default CensucIcon;
