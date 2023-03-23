import './App.sass'
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import PromoPage from './pages/PromoPage';
import StatisticPage from './pages/StatisticPage';
import BalancePage from './pages/BalancePage';
import PersonalPage from './pages/PersonalPage';
import FaqPage from './pages/FaqPage';
import SupportPage from './pages/SupportPage';
import ExitPage from './pages/ExitPage';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';

function App() {
	let url = window.location.pathname;
	console.log(url);

	return (
		<>
			<div className="wrapper">
				<Header />
				<BreadCrumbs hrefIn={url} />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/promo" element={<PromoPage />} />
					<Route path="/statistic" element={<StatisticPage />} />
					<Route path="/balance" element={<BalancePage />} />
					<Route path="/personal" element={<PersonalPage />} />
					<Route path="/faq" element={<FaqPage />} />
					<Route path="/support" element={<SupportPage />} />
					<Route path="/exit" element={<ExitPage />} />
				</Routes>
			</div>
		</>

	)
}

export default App
