import { useState } from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.sass';
import {
	HouseIcon,
	CartIcon,
	PromoIcon,
	StatisticIcon,
	BalanceIcon,
	PesnonalInfoIcon,
	FAQIcon,
	SupportIcon,
	ExitIcon
} from '../Icons/Icons';
import logo from '../../assets/icons/logo/logo.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Fade from 'react-bootstrap/Fade';

const Menu = () => {
	const [open, setOpen] = useState(true);

	return (
		<div className="leftSidebar col-sm">

			<Button className='btn-menu-toggle' onClick={() => setOpen(!open)} aria-controls="example-fade-text"
				aria-expanded={open}/>
			<Navbar bg="" className='flex-column'>
					<Navbar.Brand as={Link} to={'/'} className=''>
						<img
							src={logo}
							width="82"
							height="32"
							className="d-inline-block align-top"
							alt="logo Work5"
						/>
					</Navbar.Brand>
					<Fade in={open}>

						<Nav
							id="example-fade-text"
							className="me-auto my-2 my-lg-0 flex-column align-items-start"
							navbarScroll
						>
						<Nav.Link as={Link} to={'/home'} className="flex-row nav__item"  eventKey={'link-0'}><HouseIcon name='icon-house' size='41px'/> Главная</Nav.Link>
							<Nav.Link as={Link} to={'/cart'} className="flex-row nav__item" eventKey={'link-1'}><CartIcon name='icon-cart' size='41px' /> Мои магазины</Nav.Link>
							<Nav.Link as={Link} to={'/promo'} className="flex-row nav__item" eventKey={'link-2'}><PromoIcon name='icon-promo' size='41px' /> Промоматериалы</Nav.Link>
							<Nav.Link as={Link} to={'/statistic'} className="flex-row nav__item" eventKey={'link-3'}><StatisticIcon name='icon-statistic' size='41px' /> Статистика</Nav.Link>
							<Nav.Link as={Link} to={'/balance'} className="flex-row nav__item" eventKey={'link-4'}><BalanceIcon name='icon-balance' size='41px' /> Баланс</Nav.Link>
							<Nav.Link as={Link} to={'/personal'} className="flex-row nav__item" eventKey={'link-5'}><PesnonalInfoIcon name='icon-person' size='41px' /> Персональные данные</Nav.Link>
							<Nav.Link as={Link} to={'/faq'} className="flex-row nav__item" eventKey={'link-6'}><FAQIcon name='icon-faq' size='41px' /> FAQ</Nav.Link>
							<Nav.Link as={Link} to={'/support'} className="flex-row nav__item" eventKey={'link-7'}><SupportIcon name='icon-support' size='41px' /> Техподдержка</Nav.Link>
							<Nav.Link as={Link} to={'/exit'} className="flex-row nav__item" eventKey={'link-8'}><ExitIcon name='icon-exit' size='41px' /> Выход</Nav.Link>
						</Nav>
					</Fade>
			</Navbar>
		</div >
	);
}


export default Menu;