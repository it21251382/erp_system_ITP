import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';

import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateUser from './Pages/User-Managment/CreateUser';
import EditUser from './Pages/User-Managment/EditUser';
import ViewOneUser from './Pages/User-Managment/ViewOneUser';
import { useEffect, useState } from 'react';
import { GET } from './helpers/httpHelper';
import LeaveRequests from './Pages/LeaveRequests/LeaveRequests';
import Attendance from './Pages/Attendance/Attendance';


function App() {
	const [decoded, setDecoded] = useState(null);
	if (localStorage.getItem('userId')) {
		var userId = localStorage.getItem('userId');

		const fetchUsers = async () => {
			try {
				const response = await GET(`employee/emp/${userId}`);
				setDecoded(response.data.data);
			} catch (error) {
				console.error('Error fetching users:', error);
			}
		};

		useEffect(() => {
			fetchUsers();
		}, []);
	}
	const routes = [
		{ path: '/', name: 'Home' },
		{ path: '/create-user', name: 'Create User' },
		{ path: '/leave-request', name: 'Leave Request' },
		{ path: '/attendance', name: 'Attendance' },
	];

	const filteredLinks = routes
		.map((link) => {
			// remove all and keep only profile
			if (decoded) {
				if ((decoded?.role === 'EMPLOYEE') && (
					link.path === '/create-user' ||
					link.path === '/leave-request'
				)) {
					return null;
				}
				if ((decoded?.role === 'ADMIN') && (
					link.path === '/attendance'
				)) {
					return null;
				}
			}

			return link; // Keep other links as they are
		})
		.filter(Boolean);

	return (
		<BrowserRouter>
			<ToastContainer />
			{localStorage.getItem('user') ? <NavBar routes={filteredLinks} decoded={decoded} /> : null}
			<Routes>
				<Route path="/" element={localStorage.getItem('user') ? <Home decoded={decoded} /> : <Navigate to="/sign-in" />} />
				<Route path="/sign-in" element={localStorage.getItem('user') ? <Navigate to="/" /> : <Login />} />
				<Route path="/profile" element={localStorage.getItem('user') ? <Profile decoded={decoded} /> : <Navigate to="/sign-in" />} />
				<Route path="/create-user" element={localStorage.getItem('user') ? <CreateUser decoded={decoded} /> : <Login />} />
				<Route path="/edit-user/:id" element={localStorage.getItem('user') ? <EditUser decoded={decoded} /> : <Login />} />
				<Route path="/view-user" element={localStorage.getItem('user') ? <ViewOneUser decoded={decoded} /> : <Login />} />
				<Route path="/leave-request" element={localStorage.getItem('user') ? <LeaveRequests decoded={decoded} /> : <Login />} />
				<Route path="/attendance" element={localStorage.getItem('user') ? <Attendance decoded={decoded} /> : <Login />} />
			</Routes>

		</BrowserRouter>
	);
}

export default App;
