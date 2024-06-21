/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const EyeIcon: FC<SvgProps> = ({ width, height, iconColor='white' }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 22 14" fill="none">
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M5.10098 3.87004C3.59107 5.01515 2.5126 6.32398 2.00666
 7C2.5126 7.67602 3.59107 8.98487 5.10098 10.1299C6.65986
  11.3121 8.5847 12.25 10.75 12.25C12.9153 12.25 14.8402
   11.3121 16.399 10.1299C17.909 8.98487 18.9874 7.67602
    19.4934 7C18.9874 6.32398 17.909 5.01515 16.399 
    3.87004C14.8402 2.68783 12.9153 1.75 10.75 1.75C8.5847 
    1.75 6.65986 2.68783 5.10098 3.87004ZM10.75 14C7.92231 
    14 5.55271 12.7797 3.80896 11.4573C2.05886 10.1301 0.844403 
    8.6296 0.305429 7.90142C-0.10181 7.35131 -0.10181 6.64869
     0.305429 6.09858C0.844403 5.3704 2.05886 3.86995 3.80896
      2.54266C5.55271 1.22027 7.92231 0 10.75 0C13.5777 0 15.9473
       1.22027 17.6911 2.54266C19.4412 3.86995 20.6556 5.3704 21.1946 
       6.09858C21.6018 6.64869 21.6018 7.35131 21.1946 7.90142C20.6556
        8.6296 19.4412 10.1301 17.6911 11.4573C15.9473 12.7797 13.5777
         14 10.75 14ZM8.76735 7C8.76735 7.96653 9.65507 8.75 10.75 8.75C11.845
          8.75 12.7326 7.96653 12.7326 7C12.7326 6.03347 11.845 5.25 10.75 
          5.25C9.65507 5.25 8.76735 6.03347 8.76735 7ZM10.75 10.5C8.56007 
          10.5 6.78478 8.933 6.78478 7C6.78478 5.06704 8.56007 3.5 10.75 
          3.5C12.94 3.5 14.7152 5.06704 14.7152 7C14.7152 8.933 12.94 10.5 10.75 10.5Z"
				fill={iconColor}
			/>
		</Svg>
	);
};

export default EyeIcon;