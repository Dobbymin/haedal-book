import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import MyInfoPage from '../pages/MyInfo';
import CheckPage from '../pages/Check';
import RentPage from '../pages/Rent';
import BuyPage from '../pages/Buy';
import ReturnPage from '../pages/Return';
import RemovePage from '../pages/Remove';
import FixPage from '../pages/Fix';
import StockPage from '../pages/Stock';
import AddPage from '../pages/Add';
// import Layout from './Layout';
// import BookNavBar from '../components/organisms/BookNavBar/BookNavBar';

const router = createBrowserRouter([
	{
		path: '/',
		// element: <Layout />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: 'auth',
				children: [
					{
						path: 'login',
						element: <LoginPage />,
					},
					{
						path: 'register',
						element: <RegisterPage />,
					},
				],
			},
			{ path: 'myinfo', element: <MyInfoPage /> },
			{
				path: 'book',
				// element: <BookNavBar />,
				children: [
					{
						path: 'check',
						element: <CheckPage />,
					},
					{
						path: 'rent',
						element: <RentPage />,
					},
					{
						path: 'buy',
						element: <BuyPage />,
					},
					{
						path: 'return',
						element: <ReturnPage />,
					},
					{
						path: 'Remove',
						element: <RemovePage />,
					},
					{
						path: 'fix',
						element: <FixPage />,
					},
					{
						path: 'stock',
						element: <StockPage />,
					},
					{
						path: 'add',
						element: <AddPage />,
					},
				],
			},
		],
	},
]);

export default router;
