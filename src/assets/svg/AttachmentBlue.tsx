/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const AttachmentBlue: FC<SvgProps> = ({ height, width, iconColor }) => {
	return (
        <Svg
        width={8}
        height={16}
        fill="none"
     
      >
        <Path
          fill="#1D60C5"
          fillRule="evenodd"
          d="M7 2v10a3 3 0 0 1-6 0V3a2 2 0 0 1 4 0v9a1 1 0 0 1-2 0V4H2v8a2 2 0 0 0 4 0V3a3 3 0 0 0-6 0v9.5C.246 14.473 1.96 16 4 16s3.753-1.527 4-3.5V2H7Z"
          clipRule="evenodd"
        />
      </Svg>
    );
};

export default AttachmentBlue;
