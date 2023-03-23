import CartPopup from "../components/CartPopup/CartPopup"
import Table from "react-bootstrap/Table"
import ButtonAdd from "../components/Buttons/Buttons"
import { EditIcon } from "../components/Icons/Icons"
import CartTable from "../components/CartTable/CartTable"

const CartPage = () => {
	return (
		<div className="">
			<ButtonAdd text="Создать свой магазин" className="btn-add" icon={<EditIcon name="icon-add" size="24" fill="white" />} />
			<h1>Управление магазинами</h1>
			<CartTable/>
			{/* <CartPopup/> */}
		</div>
	)
}

export default CartPage