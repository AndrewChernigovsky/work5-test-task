import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './variables.sass'
import './index.sass'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter  } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
