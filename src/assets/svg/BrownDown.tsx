/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const BrownDown: FC<SvgProps> = ({ height, width, iconColor }) => {
	return (
        <Svg
    width={12}
    height={7}
    fill="none"

  >
    <Path
      fill="#796A6A"
      d="M.72.72a.749.749 0 0 1 1.06 0L.72 1.78a.746.746 0 0 1 0-1.06Zm1.06 0 4.47 4.469 4.47-4.47a.748.748 0 0 1 1.222.244.75.75 0 0 1-.162.817l-5 5a.749.749 0 0 1-1.06 0l-5-5L1.78.72Z"
    />
  </Svg>
    
    );
};

export default BrownDown;
