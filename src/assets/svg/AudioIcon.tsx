/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const AudioIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width="44"
			height="44"
			viewBox="0 0 44 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M22.0797 43.1593C33.7216 43.1593 43.1593 33.7216 43.1593 22.0797C43.1593 10.4377 33.7216 1 22.0797 1C10.4377 1 1 10.4377 1 22.0797C1 33.7216 10.4377 43.1593 22.0797 43.1593Z"
				fill="#E7F1FF"
				stroke="#3B3A3E"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M22.0797 43.1593C33.7216 43.1593 43.1593 33.7216 43.1593 22.0797C43.1593 10.4377 33.7216 1 22.0797 1C10.4377 1 1 10.4377 1 22.0797C1 33.7216 10.4377 43.1593 22.0797 43.1593Z"
				stroke="#257CFF"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M16 15.4968C16 13.95 17.6808 12.9887 19.014 13.7729L30.0694 20.276C31.384 21.0493 31.384 22.9504 30.0694 23.7237L19.0141 30.227C17.6808 31.0113 16 30.05 16 28.5031V15.4968Z"
				fill="#257CFF"
			/>
		</Svg>
	);
};

export default AudioIcon;
