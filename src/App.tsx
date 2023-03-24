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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

	return (
		<>
			<Container className='justify-content-md-center col-1'>
				<Row>
					<Header />
				</Row>
				<Row>
					<Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/promo' element={<PromoPage />} />
                        <Route path='/statistic' element={<StatisticPage />} />
                        <Route path='/balance' element={<BalancePage />} />
                        <Route path='/personal' element={<PersonalPage />} />
                        <Route path='/faq' element={<FaqPage />} />
                        <Route path='/support' element={<SupportPage />} />
                        <Route path='/exit' element={<ExitPage />} />
                    </Routes>
				</Row>
			</Container>
		</>

	)
}

export default App
