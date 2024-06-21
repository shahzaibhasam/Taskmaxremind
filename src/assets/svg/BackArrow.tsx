/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const BackArrow: FC<SvgProps> = ({ iconColor }) => {
	return (
		<Svg
  
    width={20}
    height={20}
    fill={iconColor}

  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.8}
      d="M19 10H1M10 19l-9-9 9-9"
    />
  </Svg>
	);
};

export default BackArrow;
