// ParentComponent.js
import React, { type FC } from 'react';

import {
AddPatientIcon,
CensucIcon,
HomeIcon,
PeopleIcon,
PhoneIcon,
AboutusIcon,
CalenderIcon,
SearchIcon,
SettingIcon,
StatisticIcon,
MessageIcon,
DraftIcon,
EyeIcon,
EmailIcon,
EyeSlash,
LeftArrowIcon,
FeedbackIcon,
CustomizeIcon,
FilterIcon,
CrossIcon,
UserIcon,
FIcon,
Fingerprint,
FadeIcon,
EditIcon,
PlusIcon,
UserFilled,
Demographics,
Charges,
Attachments,
Insurance,
Contact,
GlobeIcon,
LocationIcon,
CareTeam,
fileIcon,
AudioIcon,
imageIcon,
dropDownIcon,
CloneIcon,
Box,
CheckedBox,
Delete,
Refresh,
User,
UserWhite,
Clock,
BackArrow,
RightArrow,
EditPencil,
AudioSpeak,
AttachmentBlue,
SeeLess,
SeeMore,
ChargesDetail,
BrownDown,
PlusWhite
} from '@assets';

interface IconProps {
	name: string;
	width: number;
	height: number;
	iconColor?: string;
}

const Icon: FC<IconProps> = ({
	name,
	height,
	width,
	iconColor = '#3162A7',
}) => {
	// Assume you have the sub-component name stored in a variable or state

	// Create a map of component names to actual component references
	const componentMap: any = {
		EmailIcon,
		EyeIcon,
		FeedbackIcon,
		EyeSlash,
		AboutusIcon,
		PhoneIcon,
		HomeIcon,
		SettingIcon,
		StatisticIcon,
		PeopleIcon,
		DraftIcon,
		MessageIcon,
		LeftArrowIcon,
		AddPatientIcon,
		CensucIcon,
		SearchIcon,
		CalenderIcon,
		CustomizeIcon,
		FadeIcon,
		FilterIcon,
		CrossIcon,
		UserIcon,
		Fingerprint,
		FIcon,
		EditIcon,
		PlusIcon,
		UserFilled,
		Demographics,
		Charges,
		Attachments,
		Insurance,
		Contact,
		GlobeIcon,
		LocationIcon,
		CareTeam,
		fileIcon,
		AudioIcon,
		imageIcon,
		dropDownIcon,
		CloneIcon,
		Box,
		CheckedBox,
		Delete,
		Refresh,
		User,
		UserWhite,
		Clock,
		BackArrow,
		RightArrow,
		EditPencil,
		AudioSpeak,
		AttachmentBlue,
		SeeLess,
		SeeMore,
		ChargesDetail,
		BrownDown,
		PlusWhite
	};

	const DynamicComponent = componentMap[name];

	// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
	if (!DynamicComponent) {
		// Handle the case where the component name is not found
		return null;
	}

	return (
		<DynamicComponent width={width} height={height} iconColor={iconColor} />
	);
};

export default Icon;
