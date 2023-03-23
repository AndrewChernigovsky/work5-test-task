import Icons from './../../assets/icons/icons.svg'

interface IIcons {
	name: string;
	size: string;
	fill?: string;
	stroke?: string;
}

const HouseIcon = ({ name, fill='transparent', size, stroke }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 20" fill={fill} stroke={stroke}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const CartIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 20" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const PromoIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 20" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const StatisticIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 25" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const BalanceIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 20" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const PesnonalInfoIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 20" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const FAQIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 22" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const SupportIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 20" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const ExitIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 20" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const EditIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 25 20" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const CancelIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 20 15" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}
const AddIcon = ({ name, fill='transparent', size }: IIcons) => {
	return (
			<svg width={size} viewBox="0 0 10 10" fill={fill}>
				<use href={Icons + `#${name}`} />
			</svg>
		)
}

export {
	HouseIcon,
    CartIcon,
    PromoIcon,
    StatisticIcon,
    BalanceIcon,
    PesnonalInfoIcon,
    FAQIcon,
    SupportIcon,
	ExitIcon,
	EditIcon,
	CancelIcon,
	AddIcon
}