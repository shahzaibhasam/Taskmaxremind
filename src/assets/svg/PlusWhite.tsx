import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const PlusWhite: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
        <Svg
    
        width={13}
        height={13}
        fill="none"
        
      >
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M1 6.5h11M6.5 12V1"
        />
      </Svg>
	);
};

 
export default PlusWhite;
