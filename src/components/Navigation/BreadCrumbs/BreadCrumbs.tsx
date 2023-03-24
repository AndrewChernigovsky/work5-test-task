import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import routes from '../../../routes';

function local() {
	let url = window.location.pathname
	return url
}

const BreadCrumbs = () => {

	return (
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
	)
}

export default BreadCrumbs

