import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { toastFail, toastSuccess } from '../../Components/Shared/ToastNotification';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('pramudn@gmail.com');
	const [password, setPassword] = useState('1qaz@WSX3edc');
	const [passwordType, setPasswordType] = useState('password');

	const loginHandler = async () => {
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_LINK_PREFIX}employee/login`, {
				email,
				password,
			});
			console.log(response.data.data)

			localStorage.setItem('user', JSON.stringify(response.data.data));
			localStorage.setItem('userId', response.data.data._id);
			window.location.href = '/';
			toastSuccess('Login successful');

		} catch (error) {
			console.log(error);
			toastFail(`${error?.response?.data?.message ? error?.response?.data?.message : 'Login failed'}`);
		}
	};

	const togglePassword = () => {
		if (passwordType === 'password') {
			setPasswordType('text');
			return;
		}
		setPasswordType('password');
	};

	if (localStorage.getItem('user')) {
		return navigate('/');
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<div className="bg-gray-600 px-10 py-10 rounded-full">
				<div className="flex flex-col items-center bg-gray-800 w-full sm:w-[400px] p-10 gap-10 shadow-xl rounded-lg">
					<div className=" flex items-center justify-center font-bold text-3xl text-[#f1f1f1]">LOGIN</div>
					<input
						className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md"
						placeholder="EMAIL ADDRESS......"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className="w-full flex flex-col items-center gap-2">
						<div className="flex w-full">
							<input
								type={passwordType}
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								name="password"
								className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md rounded-tr-none rounded-br-none"
								placeholder="PASSWORD......"
							/>
							{passwordType === 'password' ? (
								<a
									className="p-2 cursor-pointer text-gray-500 hover:text-gray-600 bg-[#f1f1f1]  rounded-tr-md rounded-br-md"
									onClick={togglePassword}
								>
									<VisibilityIcon />
								</a>
							) : (
								<a
									className="p-2 cursor-pointer text-gray-500 hover:text-gray-600 bg-[#f1f1f1] rounded-tr-md rounded-br-md"
									onClick={togglePassword}
								>
									<VisibilityOffIcon />
								</a>
							)}
						</div>
					</div>
					<button
						className="bg-gray-600 w-full p-2  hover:bg-gray-700 text-white font-bold rounded-[60px]"
						onClick={loginHandler}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
