/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const AudioSpeak: FC<SvgProps> = ({ height, width, iconColor }) => {
	return (
		<Svg

    width={14}
    height={20}
    fill="none"
  
  >
    <Path
      stroke="#1D60C5"
      strokeWidth={1.5}
      d="M13 12.687a8.765 8.765 0 0 1-12.416 0M2.41 18.53h8.765M6.792 15.608v2.921"
    />
    <Path
      stroke="#1D60C5"
      strokeWidth={1.5}
      d="M9.713 9.765a2.922 2.922 0 1 1-5.843 0V3.922a2.922 2.922 0 1 1 5.843 0v5.843Z"
    />
  </Svg>
	);
};

export default AudioSpeak;
