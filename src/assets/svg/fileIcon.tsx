/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const fileIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width="36"
			height="47"
			viewBox="0 0 36 47"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M35.3333 46.375H0V0H24.2917L35.3333 11.0417V46.375Z"
				fill="#E7F1FF"
			/>
			<Path
				d="M4.43896 19.875H23.2098V22.0833H4.43896V19.875ZM4.43896 24.2917H18.7931V26.5H4.43896V24.2917ZM4.43896 28.7083H23.2098V30.9167H4.43896V28.7083ZM4.43896 33.125H18.7931V35.3333H4.43896V33.125Z"
				fill="#257CFF"
			/>
		</Svg>
	);
};

export default fileIcon;
