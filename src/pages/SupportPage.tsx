import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import routes from '../routes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function local() {
	let url = window.location.pathname
	return url
}

const SupportPage = () => {

	return (
		<>
			<Container>
				<Row>
					<Col><Breadcrumb >
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
					</Breadcrumb></Col>

				</Row>
				<Row><Col>
					<h2>Техподдержка</h2>
				</Col></Row>
			</Container>
		</>
	)
}


export default SupportPage
