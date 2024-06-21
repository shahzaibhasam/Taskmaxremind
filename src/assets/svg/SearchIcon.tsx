/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const SearchIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M7.0099 13.5709C8.5275 13.5305 9.91355 12.9848 11.0117 12.0995L15.3329 16.1978C15.5046 16.355 15.7312 16.4385 15.9638 16.4303C16.1965 16.4221 16.4166 16.3229 16.5767 16.1539C16.7369 15.985 16.8243 15.76 16.8202 15.5272C16.816 15.2945 16.7206 15.0727 16.5545 14.9096L12.2324 10.8113C13.1115 9.59307 13.5528 8.11338 13.4847 6.61265C13.4165 5.11191 12.8429 3.67832 11.8569 2.54484C10.871 1.41136 9.53068 0.644607 8.05386 0.369168C6.57704 0.0937292 5.05047 0.325797 3.72222 1.02766C2.39396 1.72953 1.34209 2.85994 0.737528 4.2352C0.132964 5.61047 0.01124 7.14977 0.392135 8.60296C0.77303 10.0562 1.63416 11.3378 2.83559 12.2397C4.03702 13.1417 5.50814 13.6108 7.0099 13.5709ZM11.7142 6.78503C11.7486 8.07959 11.2673 9.3348 10.3762 10.2745C9.48516 11.2142 8.25729 11.7615 6.96272 11.7959C5.66816 11.8303 4.41295 11.3491 3.47322 10.458C2.53349 9.56692 1.98623 8.33905 1.95183 7.04449C1.91742 5.74993 2.39869 4.49472 3.28975 3.555C4.18082 2.61528 5.40869 2.06802 6.70326 2.03361C7.99782 1.9992 9.25304 2.48047 10.1928 3.37153C11.1325 4.26259 11.6797 5.49047 11.7142 6.78503Z"
				fill={iconColor}
			/>
		</Svg>
	);
};

export default SearchIcon;
