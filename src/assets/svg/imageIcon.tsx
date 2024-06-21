/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const imageIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width="43"
			height="43"
			viewBox="0 0 43 43"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M36.506 1.63477H5.99429C4.83807 1.63477 3.72921 2.09407 2.91164 2.91164C2.09407 3.72921 1.63477 4.83807 1.63477 5.99429L1.63477 36.506C1.63477 37.0785 1.74753 37.6454 1.96661 38.1743C2.1857 38.7033 2.50682 39.1838 2.91164 39.5887C3.31646 39.9935 3.79705 40.3146 4.32597 40.5337C4.85489 40.7528 5.42178 40.8655 5.99429 40.8655H36.506C37.0785 40.8655 37.6454 40.7528 38.1743 40.5337C38.7033 40.3146 39.1838 39.9935 39.5887 39.5887C39.9935 39.1838 40.3146 38.7033 40.5337 38.1743C40.7528 37.6454 40.8655 37.0785 40.8655 36.506V5.99429C40.8655 5.42178 40.7528 4.85489 40.5337 4.32597C40.3146 3.79705 39.9935 3.31646 39.5887 2.91164C39.1838 2.50682 38.7033 2.1857 38.1743 1.96661C37.6454 1.74753 37.0785 1.63477 36.506 1.63477Z"
				fill="#E7F1FF"
			/>
			<Path
				d="M36.5075 39.2308C37.2295 39.2299 37.9217 38.9427 38.4322 38.4322C38.9427 37.9217 39.2299 37.2295 39.2308 36.5075V5.99413C39.2308 5.27173 38.9439 4.57889 38.4332 4.06791C37.9226 3.55694 37.2299 3.26966 36.5075 3.26923H5.99413V0H36.5075C38.097 0.00043345 39.6212 0.632148 40.7449 1.75622C41.8687 2.88029 42.5 4.40467 42.5 5.99413V36.5075C42.4996 38.0967 41.8681 39.6206 40.7444 40.7444C39.6206 41.8681 38.0967 42.4996 36.5075 42.5V39.2308ZM5.99413 42.5V39.2308H36.5075V42.5H5.99413ZM0 36.5075H3.26923C3.26966 37.2299 3.55694 37.9226 4.06791 38.4332C4.57889 38.9439 5.27173 39.2308 5.99413 39.2308V42.5C4.40467 42.5 2.88029 41.8687 1.75622 40.7449C0.632148 39.6212 0.00043345 38.097 0 36.5075ZM0 36.5075V5.99413H3.26923V36.5075H0ZM0 5.99413C0 4.40439 0.631523 2.87976 1.75564 1.75564C2.87976 0.631523 4.40439 0 5.99413 0V3.26923C5.27145 3.26923 4.57836 3.55632 4.06734 4.06734C3.55632 4.57836 3.26923 5.27145 3.26923 5.99413H0Z"
				fill="#257CFF"
			/>
			<Path
				d="M13.6164 16.8861C14.263 16.8861 14.8951 16.6944 15.4327 16.3352C15.9703 15.9759 16.3893 15.4653 16.6368 14.868C16.8842 14.2706 16.949 13.6133 16.8228 12.9791C16.6967 12.3449 16.3853 11.7624 15.9281 11.3052C15.4709 10.848 14.8884 10.5366 14.2542 10.4105C13.62 10.2843 12.9627 10.3491 12.3653 10.5965C11.7679 10.844 11.2574 11.263 10.8981 11.8006C10.5389 12.3382 10.3472 12.9703 10.3472 13.6169C10.3472 14.4839 10.6916 15.3155 11.3047 15.9286C11.9178 16.5417 12.7493 16.8861 13.6164 16.8861Z"
				fill="#257CFF"
			/>
			<Path
				d="M13.6162 15.2514C14.0498 15.2514 14.4655 15.0791 14.7721 14.7726C15.0786 14.466 15.2509 14.0503 15.2509 13.6167H18.5201C18.5201 14.9173 18.0034 16.1646 17.0838 17.0843C16.1641 18.0039 14.9168 18.5206 13.6162 18.5206V15.2514ZM8.7124 13.6167H11.9816C11.9816 14.0503 12.1539 14.466 12.4604 14.7726C12.767 15.0791 13.1827 15.2514 13.6162 15.2514V18.5206C12.3157 18.5206 11.0684 18.0039 10.1487 17.0843C9.22906 16.1646 8.7124 14.9173 8.7124 13.6167ZM15.2509 13.6167C15.2509 13.1832 15.0786 12.7674 14.7721 12.4609C14.4655 12.1543 14.0498 11.9821 13.6162 11.9821C13.1827 11.9821 12.767 12.1543 12.4604 12.4609C12.1539 12.7674 11.9816 13.1832 11.9816 13.6167H8.7124C8.7124 12.3162 9.22906 11.0688 10.1487 10.1492C11.0684 9.22954 12.3157 8.71289 13.6162 8.71289C14.9168 8.71289 16.1641 9.22954 17.0838 10.1492C18.0034 11.0688 18.5201 12.3162 18.5201 13.6167H15.2509Z"
				fill="#257CFF"
			/>
			<Path
				d="M35.9664 40.8606C37.267 40.8606 38.5143 40.344 39.434 39.4243C40.3536 38.5047 40.8703 37.2574 40.8703 35.9568V24.4458L29.9739 16.8857L5.99902 40.8606"
				fill="#257CFF"
			/>
			<Path
				d="M5.99906 42.4937C5.67579 42.4938 5.35975 42.398 5.09091 42.2185C4.82207 42.039 4.61249 41.7838 4.48868 41.4851C4.36493 41.1864 4.33258 40.8576 4.39572 40.5405C4.45886 40.2233 4.61465 39.932 4.84339 39.7034L28.8183 15.7301C29.0893 15.4594 29.4467 15.2925 29.8282 15.2584C30.2097 15.2244 30.5911 15.3254 30.9057 15.5438L41.7971 23.0973C42.0141 23.2479 42.1914 23.4487 42.3138 23.6827C42.4362 23.9167 42.5001 24.1769 42.5 24.441V35.952C42.5 37.6861 41.8111 39.3492 40.5849 40.5753C39.3588 41.8015 37.6957 42.4904 35.9616 42.4904L5.99906 42.4937ZM35.9665 39.2245C36.8335 39.2245 37.6651 38.88 38.2782 38.2669C38.8913 37.6538 39.2357 36.8223 39.2357 35.9552V25.3008L30.1636 19.0108L9.94666 39.2261L35.9665 39.2245Z"
				fill="#257CFF"
			/>
		</Svg>
	);
};

export default imageIcon;
