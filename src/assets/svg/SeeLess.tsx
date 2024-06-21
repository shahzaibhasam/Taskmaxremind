/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const SeeLess: FC<SvgProps> = ({ height, width, iconColor }) => {
	return (
        <Svg

        width={12}
        height={7}
        fill="none"
    
      >
        <Path
          fill="#1D60C5"
          d="M.29 6.404a.749.749 0 0 0 1.06-.012L.277 5.344a.746.746 0 0 0 .011 1.06Zm1.06-.012 4.42-4.518 4.519 4.42a.75.75 0 1 0 1.048-1.072L6.282.277a.749.749 0 0 0-1.06.012L.278 5.344l1.071 1.048Z"
        />
      </Svg>
    );
};

export default SeeLess;
