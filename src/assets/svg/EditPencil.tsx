/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const EditPencil: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
 
    width={18}
    height={18}
    fill="none"
 
  >
    <Path
      stroke="#635B5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.395 1.707a2.419 2.419 0 0 1 0 3.42L5.562 15.963 1 17.102l1.14-4.497L12.978 1.71a2.413 2.413 0 0 1 3.267-.143l.15.139Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#635B5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.842 17.102h9.123M14.685 4.558l1.14 1.14"
    />
  </Svg>
	);
};

export default EditPencil;
