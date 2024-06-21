/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const dropDownIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width="11"
			height="10"
			viewBox="0 0 11 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M6.03703 9.47119C5.64892 10.136 4.68668 10.1313 4.305 9.46282L0.151718 2.18822C-0.229958 1.51971 0.255186 0.688704 1.02498 0.692421L9.40161 0.732873C10.1714 0.73659 10.6485 1.57224 10.2604 2.23704L6.03703 9.47119Z"
				fill="#2E476B"
			/>
		</Svg>
	);
};

export default dropDownIcon;
