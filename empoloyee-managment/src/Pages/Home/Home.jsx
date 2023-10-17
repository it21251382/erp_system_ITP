import { useEffect, useState } from 'react';
import { GET, POST } from '../../helpers/httpHelper';
import AllUsers from '../User-Managment/AllUsers';
import { toastFail, toastSuccess } from '../../Components/Shared/ToastNotification';
import LeaveTable from './components/LeaveTable';

function Home({ decoded }) {
	console.log(decoded);
	// employee,
	// 	reason,
	// 	date,
	// 	status: "PENDING",
	const [leaves, setLeaves] = useState([]);

	const [reason, setReason] = useState('');
	const [date, setDate] = useState('');
	const getLeaves = async () => {
		try {
			const response = await GET(`/leave/emp/${localStorage.getItem('userId')}`);
			console.log(response.data.data);
			setLeaves(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	const createLeaveRequest = async () => {
		try {
			if (!reason || !date) {
				return toastFail('Please fill all the fields');
			}
			const data = {
				employee: decoded._id,
				reason,
				date: new Date(date),
			};

			const response = await POST('/leave/create', data);
			console.log(response);
			if (response.status === 201) {
				toastSuccess('Leave request created successfully');
				setReason('');
				setDate('');
				getLeaves();
			}
		} catch (error) {
			console.log(error);
			toastFail(`${error?.response?.data?.message ? error?.response?.data?.message : 'Something went wrong'}`);
		}
	};


	useEffect(() => {
		getLeaves();
	}, []);
	console.log(leaves);

	if (!localStorage.getItem('user')) {
		return window.location.replace('/sign-in');
	}
	return (
		<div className="container mx-auto px-4 sm:px-8 ">
			{decoded?.role === 'ADMIN' ? (
				<AllUsers />
			) : (
				<>
					<div className="flex flex-row items-center justify-between">
						<div className="justify-left flex flex-col py-5">
							<h1 className="text-lg sm:text-xl md:text-2xl uppercase">{decoded?.role === 'ADMIN' ? 'All Users' : 'My Leaves'}</h1>
							<span className="w-[100px] h-[2px] bg-yellow-500" />
						</div>
						<div className="flex flex-row items-center justify-center">
							<input
								type="text"
								placeholder="Reason"
								className="border-2 border-gray-300 rounded-md p-2 m-2"
								onChange={(e) => setReason(e.target.value)}
								value={reason}
							/>
							<input
								type="date"
								placeholder="Date"
								className="border-2 border-gray-300 rounded-md p-2 m-2"
								onChange={(e) => setDate(e.target.value)}
								value={date}
							/>
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								onClick={createLeaveRequest}
							>
								Create
							</button>
						</div>
					</div>
					<LeaveTable leaves={leaves} decoded={decoded} />
				</>
			)}
		</div>
	);
}

export default Home;
