/* eslint-disable max-len */
import Svg, { G, Mask, Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const Delete: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg width="15" height="15" viewBox="0 0 12 12" fill="none">
			<Mask
				id="mask0_529_3164"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="12"
				height="12"
			>
				<Path d="M0 0H11.586V11.586H0V0Z" fill="white" />
			</Mask>
			<G mask="url(#mask0_529_3164)">
				<Path
					d="M10.1373 2.35254C10.2813 2.35254 10.4194 2.40975 10.5212 2.51158C10.6231 2.61341 10.6803 2.75153 10.6803 2.89554C10.6803 3.03955 10.6231 3.17767 10.5212 3.2795C10.4194 3.38133 10.2813 3.43854 10.1373 3.43854V2.35254ZM2.41327 3.43854H1.44827C1.30426 3.43854 1.16615 3.38133 1.06431 3.2795C0.962482 3.17767 0.905273 3.03955 0.905273 2.89554C0.905273 2.75153 0.962482 2.61341 1.06431 2.51158C1.16615 2.40975 1.30426 2.35254 1.44827 2.35254H10.1373V3.43854H2.41327Z"
					fill="#ED2828"
				/>
				<Path
					d="M8.20416 10.0739C8.31609 10.0739 8.42342 10.0295 8.50256 9.95032C8.5817 9.87118 8.62616 9.76385 8.62616 9.65193V2.89392C8.62616 2.74991 8.68337 2.6118 8.78521 2.50997C8.88704 2.40813 9.02515 2.35092 9.16916 2.35092C9.31318 2.35092 9.45129 2.40813 9.55312 2.50997C9.65496 2.6118 9.71216 2.74991 9.71216 2.89392V9.65193C9.71216 10.0521 9.55318 10.436 9.27019 10.7189C8.9872 11.0019 8.60338 11.1609 8.20316 11.1609L8.20416 10.0739ZM3.37616 11.1609V10.0739H8.20416V11.1599L3.37616 11.1609ZM2.31016 10.7199L3.07816 9.95192C3.15792 10.0311 3.26582 10.0753 3.37816 10.0749V11.1609C3.1799 11.1612 2.98354 11.1224 2.80028 11.0467C2.61703 10.971 2.45048 10.86 2.31016 10.7199ZM1.86816 9.65193H2.95416C2.95417 9.76439 2.99876 9.87227 3.07816 9.95192L2.31016 10.7199C2.16992 10.5797 2.0587 10.4132 1.98285 10.2299C1.90701 10.0467 1.86804 9.85026 1.86816 9.65193ZM1.86816 9.65193V2.89392C1.86816 2.74991 1.92537 2.6118 2.02721 2.50997C2.12904 2.40813 2.26715 2.35092 2.41116 2.35092C2.55518 2.35092 2.69329 2.40813 2.79512 2.50997C2.89696 2.6118 2.95416 2.74991 2.95416 2.89392V9.65193H1.86816ZM7.17816 2.89392H8.26816C8.26816 3.03794 8.21096 3.17605 8.10912 3.27788C8.00729 3.37972 7.86918 3.43692 7.72516 3.43692C7.58115 3.43692 7.44304 3.37972 7.34121 3.27788C7.23937 3.17605 7.18216 3.03794 7.18216 2.89392H7.17816ZM3.31616 2.89392H4.40216C4.40216 3.03794 4.34496 3.17605 4.24312 3.27788C4.14129 3.37972 4.00318 3.43692 3.85916 3.43692C3.71515 3.43692 3.57704 3.37972 3.47521 3.27788C3.37337 3.17605 3.31616 3.03794 3.31616 2.89392ZM7.17816 2.89392V1.92792C7.1779 1.81608 7.13335 1.7089 7.05427 1.62982C6.97519 1.55073 6.868 1.50619 6.75616 1.50592H4.82516C4.7127 1.50594 4.60482 1.55053 4.52516 1.62992L3.75816 0.861925C4.04115 0.57893 4.42496 0.419938 4.82516 0.419925H6.75616C6.9545 0.419531 7.15096 0.458238 7.33432 0.533833C7.51769 0.609428 7.68435 0.720428 7.82477 0.860485C7.9652 1.00054 8.07664 1.16691 8.15273 1.35007C8.22881 1.53323 8.26803 1.72959 8.26816 1.92792V2.89392H7.17816ZM3.31616 2.89392V1.92792H4.40216V2.89392H3.31616ZM3.31616 1.92792C3.31644 1.52806 3.47541 1.14466 3.75816 0.861925L4.52516 1.62992C4.44604 1.70968 4.4028 1.81758 4.40316 1.92992L3.31616 1.92792Z"
					fill="#ED2828"
				/>
				<Path
					d="M4.28711 8.20365H5.37311C5.37311 8.34766 5.3159 8.48578 5.21407 8.58761C5.11224 8.68944 4.97412 8.74665 4.83011 8.74665C4.6861 8.74665 4.54798 8.68944 4.44615 8.58761C4.34432 8.48578 4.28711 8.34766 4.28711 8.20365ZM4.28711 8.20365V5.30765C4.28711 5.16364 4.34432 5.02552 4.44615 4.92369C4.54798 4.82186 4.6861 4.76465 4.83011 4.76465C4.97412 4.76465 5.11224 4.82186 5.21407 4.92369C5.3159 5.02552 5.37311 5.16364 5.37311 5.30765V8.20765L4.28711 8.20365Z"
					fill="#ED2828"
				/>
				<Path
					d="M6.21289 8.20365H7.29889C7.29889 8.34766 7.24168 8.48578 7.13985 8.58761C7.03802 8.68944 6.8999 8.74665 6.75589 8.74665C6.61188 8.74665 6.47376 8.68944 6.37193 8.58761C6.2701 8.48578 6.21289 8.34766 6.21289 8.20365ZM6.21289 8.20365V5.30765C6.21289 5.16364 6.2701 5.02552 6.37193 4.92369C6.47376 4.82186 6.61188 4.76465 6.75589 4.76465C6.8999 4.76465 7.03802 4.82186 7.13985 4.92369C7.24168 5.02552 7.29889 5.16364 7.29889 5.30765V8.20765L6.21289 8.20365Z"
					fill="#ED2828"
				/>
			</G>
		</Svg>
	);
};

export default Delete;
