/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';

import React, { type FC } from 'react';

import { type SvgProps } from '@lib';

const FadeIcon: FC<SvgProps> = ({ width, height, iconColor }) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 4 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M3.21069 0.635277C3.21852 0.650896 3.22243 0.663914 3.22244 0.674331C3.22246 0.69256 3.21596 0.708189 3.20294 0.72122C3.18993 0.73425 3.17432 0.747282 3.1561 0.760317C3.14048 0.770745 3.12617 0.782474 3.11316 0.795504C3.10014 0.80593 3.09364 0.817654 3.09365 0.830675C3.09366 0.841091 3.09497 0.851507 3.09758 0.861922C3.10019 0.869732 3.1015 0.877544 3.1015 0.885356C3.10151 0.893169 3.10021 0.898378 3.09761 0.900984C3.05337 0.945287 3.02345 0.984372 3.00785 1.01824C2.99225 1.0495 2.97534 1.07685 2.95713 1.10031C2.94152 1.12115 2.91549 1.1381 2.87904 1.15114C2.84259 1.16159 2.7814 1.16684 2.69546 1.1669C2.67723 1.16692 2.6603 1.16563 2.64467 1.16303C2.62904 1.15784 2.61212 1.15525 2.59389 1.15526C2.5418 1.1553 2.48322 1.17617 2.41815 1.21789C2.35308 1.257 2.27761 1.32606 2.19174 1.42508C2.15531 1.46678 2.12799 1.50065 2.10978 1.52671C2.09157 1.55276 2.07597 1.58012 2.06297 1.60877C2.05257 1.63482 2.04218 1.66738 2.03179 1.70645C2.0214 1.74552 2.00712 1.79761 1.98893 1.86273C1.98634 1.87055 1.97983 1.87836 1.96942 1.88618C1.96161 1.8914 1.95771 1.90312 1.95773 1.92135C1.95516 1.97083 1.94609 2.03334 1.93052 2.10887C1.91495 2.1818 1.89807 2.25342 1.8799 2.32375C1.86172 2.39407 1.84484 2.45789 1.82925 2.51519C1.81627 2.56989 1.80979 2.60505 1.8098 2.62067C1.80982 2.64151 1.80983 2.66104 1.80984 2.67927C1.81246 2.69489 1.81377 2.70921 1.81378 2.72223C1.80079 2.76391 1.7891 2.80428 1.77871 2.84335C1.77092 2.87721 1.76314 2.91238 1.75535 2.94884C1.75017 2.9827 1.74758 3.01004 1.7476 3.03088C1.74763 3.06994 1.76718 3.09466 1.80625 3.10505C1.84792 3.11544 1.89089 3.12062 1.93517 3.12058C2.00548 3.12053 2.06668 3.12049 2.11876 3.12045C2.17345 3.12041 2.22293 3.12037 2.2672 3.12034C2.31407 3.1177 2.35834 3.11507 2.4 3.11243C2.44167 3.10719 2.48854 3.09935 2.54061 3.08889C2.54842 3.08628 2.55753 3.08107 2.56794 3.07325C2.57835 3.06282 2.59397 3.0576 2.61481 3.05759L2.6734 3.05754C2.72028 3.05751 2.74892 3.05098 2.75932 3.03795C2.76973 3.02232 2.77623 3.00669 2.77882 2.99106C2.78402 2.97543 2.79182 2.9611 2.80223 2.94808C2.81263 2.93244 2.84388 2.92461 2.89596 2.92457C2.90898 2.92456 2.922 2.92455 2.93502 2.92454C2.95065 2.92193 2.96497 2.91801 2.97798 2.91279C2.98842 2.93622 2.99364 2.96096 2.99366 2.987C2.99368 3.01564 2.98458 3.03909 2.96637 3.05733C2.95076 3.07557 2.92603 3.09512 2.89219 3.11598C2.88438 3.12119 2.87007 3.12641 2.84924 3.13164C2.8284 3.13425 2.81278 3.13947 2.80237 3.14729C2.77374 3.17075 2.74642 3.19421 2.72039 3.21767C2.69697 3.24112 2.67225 3.26327 2.64622 3.28413C2.6228 3.30237 2.59547 3.31932 2.56423 3.33497C2.53299 3.35062 2.49654 3.36497 2.45488 3.37802C2.43405 3.38324 2.41453 3.38716 2.3963 3.38978C2.37807 3.3924 2.35594 3.39502 2.3299 3.39764C2.30646 3.40026 2.27912 3.40549 2.24788 3.41332C2.21663 3.41856 2.17888 3.4264 2.13461 3.43684C2.1268 3.43945 2.11248 3.44077 2.09165 3.44078C2.07602 3.44079 2.05649 3.44081 2.03306 3.44082C2.00962 3.43824 1.97967 3.43696 1.94321 3.43698C1.85988 3.43704 1.79868 3.4436 1.75963 3.45665C1.72058 3.4697 1.69325 3.49316 1.67765 3.52702C1.66205 3.56089 1.65167 3.60907 1.6465 3.67158C1.64134 3.73148 1.62968 3.80831 1.61152 3.90207C1.59077 4.01667 1.57001 4.11694 1.54924 4.2029C1.52847 4.28885 1.51809 4.35006 1.51812 4.38651C1.51814 4.41516 1.51816 4.44381 1.51818 4.47245C1.52081 4.49849 1.52213 4.52583 1.52215 4.55448C1.52222 4.64563 1.51707 4.73287 1.50672 4.81621C1.49636 4.89695 1.48339 4.97638 1.46783 5.05452C1.45226 5.13005 1.43538 5.20558 1.41721 5.28112C1.40164 5.35665 1.38868 5.43348 1.37832 5.51162C1.37054 5.5637 1.36537 5.61579 1.36281 5.66788C1.36024 5.71996 1.35637 5.77335 1.3512 5.82804C1.34602 5.8645 1.33563 5.89967 1.32003 5.93353C1.30443 5.96479 1.29404 5.99866 1.28886 6.03512C1.27848 6.09502 1.27461 6.14841 1.27725 6.19528C1.27989 6.24216 1.27472 6.29555 1.26175 6.35545C1.25655 6.37629 1.25135 6.39062 1.24615 6.39843C1.24095 6.40885 1.23575 6.42318 1.23056 6.44141C1.22019 6.50131 1.20981 6.55471 1.19942 6.60159C1.19165 6.65108 1.18127 6.69666 1.16827 6.73833C1.15789 6.78261 1.1462 6.82559 1.13321 6.86726C1.12022 6.90894 1.10463 6.95192 1.08643 6.9962C1.08123 7.00923 1.06953 7.02747 1.05132 7.05092C1.03571 7.07697 1.02791 7.0926 1.02791 7.09781C1.02792 7.10823 1.02793 7.11864 1.02793 7.12906C1.03055 7.14208 1.03186 7.1551 1.03187 7.16812C1.03189 7.19677 1.01238 7.22543 0.973339 7.2541C0.934299 7.28538 0.893964 7.32577 0.852333 7.37528C0.839326 7.39352 0.828923 7.41306 0.821126 7.4339C0.815935 7.45734 0.806835 7.47688 0.793825 7.49251C0.783418 7.50554 0.769102 7.51467 0.750876 7.51989C0.732653 7.52771 0.718338 7.53814 0.70793 7.55117C0.697523 7.5642 0.689723 7.58113 0.68453 7.60197C0.679339 7.62541 0.667636 7.64755 0.649422 7.6684C0.631208 7.68925 0.611694 7.7127 0.59088 7.73875C0.570067 7.76741 0.547952 7.79477 0.524534 7.82083C0.503719 7.84689 0.484203 7.86774 0.465985 7.88338C0.44777 7.90162 0.433453 7.91074 0.423037 7.91075C0.410016 7.91076 0.396989 7.90296 0.383957 7.88734C0.373529 7.87173 0.3631 7.85481 0.35267 7.83658C0.344844 7.81836 0.33832 7.80014 0.333099 7.78191C0.327879 7.76629 0.325267 7.75587 0.325264 7.75067C0.325248 7.72983 0.335648 7.70639 0.356462 7.68033C0.377278 7.65688 0.387667 7.61911 0.387629 7.56703C0.387624 7.55921 0.386315 7.5501 0.383703 7.53969C0.383698 7.53187 0.383692 7.52406 0.383686 7.51625C0.383671 7.49542 0.38887 7.48239 0.399283 7.47717C0.409695 7.47196 0.414901 7.46805 0.414899 7.46544C0.430484 7.41075 0.447375 7.36125 0.465572 7.31697C0.486373 7.27268 0.499359 7.2245 0.504529 7.17241C0.504525 7.1672 0.503218 7.16069 0.500608 7.15288C0.500603 7.14507 0.500598 7.13856 0.500594 7.13335C0.500585 7.12033 0.509686 7.10209 0.527898 7.07864C0.546112 7.0578 0.557818 7.04086 0.563017 7.02784C0.575998 6.97314 0.579866 6.92105 0.574622 6.87158C0.571983 6.8247 0.577158 6.77913 0.590147 6.73485C0.595336 6.7088 0.604431 6.68145 0.617431 6.6528C0.633035 6.62414 0.643429 6.59288 0.648612 6.55902C0.666766 6.45484 0.678402 6.34155 0.683521 6.21915C0.691244 6.09675 0.709392 5.98606 0.737966 5.88708C0.743161 5.86885 0.748359 5.85452 0.753559 5.8441C0.761364 5.83368 0.765265 5.82587 0.765261 5.82066C0.765248 5.80243 0.760025 5.7829 0.749593 5.76207C0.741763 5.73864 0.737841 5.71651 0.737826 5.69568L0.73782 5.68786C0.748237 5.68786 0.757341 5.67353 0.765133 5.64488C0.775526 5.61362 0.78331 5.57455 0.788484 5.52767C0.796261 5.47819 0.802732 5.4248 0.807899 5.3675C0.813063 5.3076 0.818229 5.249 0.823395 5.19171C0.82856 5.13181 0.832425 5.07582 0.834992 5.02373C0.840162 4.97164 0.84534 4.92997 0.850525 4.89872C0.858296 4.84142 0.868677 4.79324 0.88167 4.75417C0.897266 4.71509 0.907647 4.66561 0.912811 4.60571C0.912787 4.57185 0.923165 4.51976 0.943947 4.44943C0.967332 4.3765 0.992011 4.29445 1.01799 4.20328C1.04396 4.10952 1.06732 4.00794 1.08808 3.89855C1.10883 3.78916 1.11917 3.67847 1.11908 3.56649C1.11906 3.53003 1.10472 3.50791 1.07607 3.50012C1.05002 3.48972 1.01486 3.48454 0.970587 3.48457C0.887253 3.48463 0.815645 3.4938 0.755763 3.51207C0.698483 3.52774 0.647715 3.546 0.603459 3.56687C0.559204 3.58773 0.518853 3.60729 0.482408 3.62555C0.445961 3.6412 0.409509 3.64904 0.37305 3.64907C0.362634 3.64908 0.347007 3.64648 0.32617 3.64129C0.328747 3.60483 0.337838 3.57227 0.353442 3.54361C0.369046 3.51496 0.387256 3.4889 0.408073 3.46545C0.431491 3.43939 0.456214 3.41593 0.48224 3.39508C0.510869 3.37162 0.536893 3.34817 0.560314 3.32471C0.601952 3.28562 0.646187 3.23741 0.693021 3.18008C0.742458 3.12276 0.794512 3.08235 0.849182 3.05888C0.872612 3.04844 0.89865 3.04322 0.927296 3.04319C0.958544 3.04057 0.988491 3.03924 1.01714 3.03922C1.04838 3.0366 1.07703 3.03397 1.10307 3.03135C1.12911 3.02612 1.15254 3.01569 1.17336 3.00005C1.20459 2.97398 1.2267 2.9349 1.23968 2.88281C1.25266 2.82811 1.26173 2.77081 1.2669 2.71092C1.27206 2.64841 1.27722 2.58591 1.28239 2.5234C1.28755 2.4609 1.29923 2.4062 1.31742 2.35932C1.32262 2.34629 1.32782 2.33717 1.33303 2.33196C1.33823 2.32414 1.34343 2.31763 1.34864 2.31242C1.35384 2.30721 1.35904 2.29939 1.36425 2.28897C1.36945 2.27855 1.37334 2.26292 1.37593 2.24209C1.3811 2.1926 1.39409 2.14832 1.4149 2.10924C1.4357 2.07017 1.46041 2.02718 1.48902 1.98028C1.49683 1.97247 1.50334 1.96986 1.50855 1.97246C1.51636 1.97506 1.52026 1.96724 1.52025 1.94901C1.52023 1.93078 1.53194 1.91515 1.55537 1.90211C1.5788 1.88647 1.59701 1.86432 1.61001 1.83566C1.63081 1.79659 1.64771 1.75491 1.6607 1.71063C1.67369 1.66635 1.69449 1.62987 1.72312 1.60121C1.72832 1.59599 1.73743 1.59078 1.75045 1.58556C1.76347 1.58034 1.77649 1.57643 1.7895 1.57381C1.80252 1.5686 1.81424 1.56338 1.82465 1.55816C1.83506 1.55034 1.84026 1.54123 1.84025 1.53081C1.84025 1.5256 1.83894 1.51909 1.83633 1.51128C1.83633 1.50347 1.83632 1.49696 1.83632 1.49175C1.83632 1.48654 1.84282 1.47612 1.85583 1.46048C1.86884 1.44485 1.88185 1.42791 1.89485 1.40968C1.91047 1.39143 1.92478 1.3758 1.93779 1.36277C1.9508 1.34713 1.9573 1.33932 1.9573 1.33932C1.9573 1.33411 1.97031 1.31978 1.99633 1.29632C2.02236 1.27026 2.05228 1.24289 2.08612 1.21422C2.11995 1.18295 2.15248 1.15428 2.18371 1.12821C2.21755 1.10215 2.23967 1.0839 2.25008 1.07348C2.25788 1.06566 2.2735 1.05784 2.29693 1.05001C2.32036 1.03957 2.34249 1.02784 2.36332 1.0148C2.37893 1.00698 2.38934 0.997856 2.39455 0.987435C2.40235 0.977013 2.41276 0.967891 2.42578 0.960069C2.43618 0.949644 2.4492 0.944426 2.46483 0.944415C2.48306 0.944402 2.49868 0.939182 2.51169 0.928756C2.56374 0.887051 2.60408 0.844053 2.63269 0.799761C2.66391 0.752863 2.70164 0.718982 2.7459 0.698116C2.75891 0.690294 2.78104 0.685069 2.81229 0.682443C2.84354 0.679816 2.86958 0.674588 2.89041 0.66676C2.91905 0.658927 2.94247 0.647191 2.96069 0.631553C2.97891 0.615915 3.00495 0.608083 3.0388 0.608058C3.04661 0.608053 3.05313 0.613256 3.05834 0.623669C3.06616 0.631476 3.07658 0.635375 3.0896 0.635365C3.09221 0.635363 3.09741 0.631453 3.10522 0.623635C3.11563 0.613211 3.13515 0.607988 3.1638 0.607967C3.18463 0.607952 3.20026 0.617055 3.21069 0.635277Z"
				fill="rgba(29, 30, 37, 0.29)"
				fill-opacity="0.19"
			/>
		</Svg>
	);
};

export default FadeIcon;
