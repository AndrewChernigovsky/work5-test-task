import Button from "react-bootstrap/esm/Button";

interface IButtons{
	className?: string;
	text?: string;
	icon?: JSX.Element;
}

const ButtonAdd = ({ className, text, icon }: IButtons) => {
	return (
		<>
			<Button className={className}>
				{icon}
				{text}
			</Button>
		</>
	)
}

export default ButtonAdd