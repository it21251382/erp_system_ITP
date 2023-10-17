import React, { useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
;
function NavBar({ routes, decoded }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	const logoutHandler = () => {
		localStorage.removeItem('AccessToken');
		localStorage.removeItem('user');
		localStorage.clear();
		navigate('/sign-in');
	}
	return (
		<div className="bg-gray-800 p-4">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="text-white font-bold text-2xl"><img src={`${process.env.PUBLIC_URL}/assets/logo1.png`} alt="Logo" className="w-10 h-10" /></div>

					<div className="block md:hidden">
						<button
							onClick={toggleNavbar}
							className="text-white focus:outline-none"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path d="M6 18L18 6M6 6l12 12"></path>
								) : (
									<path d="M4 6h16M4 12h16m-7 6h7"></path>
								)}
							</svg>
						</button>
					</div>

					<div className="hidden md:flex flex-grow items-center justify-start space-x-4 pl-10">
						{routes.map((route, key) => (
							<div
								key={key}
								className={`${location.pathname === route.path
									? 'bg-gray-900'
									: 'text-gray-300 hover:bg-gray-700'
									} px-3 py-2 rounded-md text-sm font-medium`}
							>
								<a
									href={route.path}
									className="text-white hover:text-white"
								>
									{route.name}
								</a>
							</div>
						))}
					</div>

					<div className="hidden md:flex items-center">
						<div className="flex items-center">
							<img
								src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}
								alt="Profile"
								className="w-10 h-10 rounded-full"
							/>
							<button type="button" onClick={() => navigate('/view-user', { state: decoded?._id })} >
								<span className="text-white ml-2 cursor-pointer hover:text-gray-600">{decoded?.name}</span>
							</button>
						</div>
						<div className="flex items-center">
							<button className="flex mx-4 text-white focus:outline-none bg-gray-700 rounded-full px-2 py-1 hover:bg-gray-600"
								onClick={logoutHandler}
							>
								Logout
							</button>
						</div>
					</div>
				</div>

				{isOpen && (
					<div className="md:hidden mt-4 z-50 absolute  left-0 w-full bg-gray-800">
						{routes.map((route, key) => (
							<div
								key={key}
								className={`${location.pathname === route.path
									? 'bg-gray-900'
									: 'text-gray-300 hover:bg-gray-700'
									} block px-3 py-2 rounded-md text-base font-medium`}
							>
								<a
									href={route.path}
									className="text-white hover:text-white"
								>
									{route.name}
								</a>
							</div>
						))}
						<button
							className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 focus:outline-none"
							onClick={logoutHandler}
						>
							Logout
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default NavBar;
