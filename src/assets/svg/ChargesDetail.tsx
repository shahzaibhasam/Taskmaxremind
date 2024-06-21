/* eslint-disable max-len */
import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

import { Path, Svg } from 'react-native-svg';

const ChargesDetail: FC<SvgProps> = ({ iconColor }) => {
	return (
		<Svg
    width={17}
    height={17}
    fill="none"

  >
    <Path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M8.5 1.186a7.314 7.314 0 1 0 0 14.628 7.314 7.314 0 0 0 0-14.628ZM0 8.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Zm8.5-5.337c.328 0 .593.265.593.593v.25c1.29.231 2.372 1.2 2.372 2.517a.593.593 0 1 1-1.186 0c0-.536-.446-1.104-1.186-1.306V7.96c1.29.23 2.372 1.2 2.372 2.517s-1.083 2.286-2.372 2.517v.25a.593.593 0 0 1-1.186 0v-.25c-1.29-.231-2.372-1.2-2.372-2.517a.593.593 0 0 1 1.186 0c0 .536.446 1.104 1.186 1.306V9.04c-1.29-.23-2.372-1.2-2.372-2.517s1.083-2.286 2.372-2.517v-.25c0-.328.265-.593.593-.593Zm-.593 2.054c-.74.202-1.186.77-1.186 1.306 0 .537.446 1.105 1.186 1.307V5.217ZM9.093 9.17v2.613c.74-.202 1.186-.77 1.186-1.306 0-.537-.446-1.105-1.186-1.307Z"
      clipRule="evenodd"
    />
  </Svg>
	);
};

export default ChargesDetail;
