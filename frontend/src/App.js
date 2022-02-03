import React from 'react';
import { Router } from 'react-router-dom';
import MyNavbar from './components/navbar';
import history from './services/history';
import Routes from './routes';
function App() {
	return (
		<div>
			<MyNavbar />
			<Router history={history}>
				<Routes />
			</Router>
		</div>
	);
}
export default App;