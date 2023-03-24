import CartPopup from "../components/CartPopup/CartPopup"
import Table from "react-bootstrap/Table"
import ButtonAdd from "../components/Buttons/Buttons"
import { EditIcon } from "../components/Icons/Icons"
import CartTable from "../components/CartTable/CartTable"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import routes from '../routes';

function local() {
	let url = window.location.pathname
	return url
}

const CartPage = () => {
	return (
		<div className="">
			<Breadcrumb >
				<Breadcrumb.Item><Link to='/'>Главная</Link></Breadcrumb.Item>
				{
					routes.map((route, index) => {
						return (

							route.path === local() &&
							<Breadcrumb.Item key={index} active>
								<Link to={route.path}>{route.name}</Link>
							</Breadcrumb.Item>
						)
					})
				}
			</Breadcrumb>
			<ButtonAdd text="Создать свой магазин" className="btn-add" icon={<EditIcon name="icon-add" size="24" fill="white" />} />
			<h1>Управление магазинами</h1>
			<CartTable />
			{/* <CartPopup/> */}
		</div>
	)
}


export default CartPage