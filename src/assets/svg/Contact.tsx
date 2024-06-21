/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const Contact: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width="22"
			height="21"
			viewBox="0 0 22 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M5.29684 1.38699L9.11182 6.63242C9.97255 6.24849 10.8072 5.82728 11.6122 5.37063C12.8719 4.64982 11.6312 3.56785 10.1859 1.67439C8.74058 -0.219075 9.00005 -0.761595 5.29684 1.38699ZM14.9915 14.9117L18.8065 20.1571C19.6672 19.7732 20.5019 19.352 21.3069 18.8954C22.5665 18.1745 21.3258 17.0926 19.8805 15.1991C18.4352 13.3056 18.6947 12.7631 14.9915 14.9117ZM3.98225 2.05247L7.87111 7.27792C7.87111 7.27792 6.16634 7.63909 7.01874 9.71237C7.87114 11.7856 10.648 16.5946 13.8379 15.5126L17.7646 20.8026C17.7646 20.8026 9.83732 22.3057 5.24383 17.0157C0.650342 11.7257 -1.31585 6.58479 3.9804 2.04632L3.98225 2.05247Z"
				fill="white"
			/>
		</Svg>
	);
};

export default Contact;
