/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const RightArrow: FC<SvgProps> = () => {
	return (
		<Svg
    
    width={16}
    height={12}
    fill="none"
   
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M1 6h14M10 1l5 5-5 5"
    />
  </Svg>
	);
};

export default RightArrow;
