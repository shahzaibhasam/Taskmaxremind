/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const UserWhite: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 12 13" fill="none" >
<Path d="M8.55676 3.71747C8.55676 5.21829 7.3104 6.43494 5.77301 6.43494C4.23558 6.43494 2.98926 5.21829 2.98926 3.71747C2.98926 2.21665 4.23558 1 5.77301 1C7.3104 1 8.55676 2.21665 8.55676 3.71747Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M5.77214 6.7002C3.13656 6.7002 1 8.83675 1 11.4723H10.5443C10.5443 8.83675 8.40773 6.7002 5.77214 6.7002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

	);
};

export default UserWhite;
