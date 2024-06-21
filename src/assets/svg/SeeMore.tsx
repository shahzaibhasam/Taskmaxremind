/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const SeeMore: FC<SvgProps> = ({ height, width, iconColor }) => {
	return (
        <Svg
      
        width={12}
        height={7}
        fill="none"
       
      >
        <Path
          fill="#1D60C5"
          d="M.29.222a.749.749 0 0 1 1.06.012L.277 1.282A.746.746 0 0 1 .289.222Zm1.06.012 4.42 4.518 4.519-4.42a.75.75 0 1 1 1.048 1.072L6.282 6.35a.749.749 0 0 1-1.06-.012L.278 1.282 1.349.234Z"
        />
      </Svg>
    );
};

export default SeeMore;
