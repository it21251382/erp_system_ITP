import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DELETE, GET } from "../../helpers/httpHelper";
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toastFail, toastSuccess } from "../../Components/Shared/ToastNotification";

function AllUsers() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    // Assuming you have a function to fetch users from your backend
    const fetchUsers = async () => {
        try {
            const response = await GET('employee/employees');
            setUsers(response.data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleEdit = (userId) => {
        // Implement edit logic here, e.g., redirect to edit page
        console.log(userId);
        navigate(`/edit-user/${userId._id}`);
    };

    const handleView = (userId) => {
        navigate(`/view-user`, { state: userId._id });
    };

    const handleDelete = async (userId) => {
        try {
            console.log(userId);

            if (userId.role === 'ADMIN') {
                toastFail('You cannot delete an admin');
                return;
            }

            if (!window.confirm('Are you sure you want to delete this user?')) {
                return;
            }


            // const response = await DELETE(`employee/delete/${userId._id}`);
            console.log(response);
            fetchUsers();
            toastSuccess('User deleted successfully');
        } catch (error) {
            toastFail(`${error?.response?.data?.message ? error?.response?.data?.message : 'Something went wrong'}`);
        }
    };

    return (
        <>
            <div className="justify-left flex flex-col py-5">
                <h1 className="text-lg sm:text-xl md:text-2xl uppercase">All Users</h1>
                <span className="w-[100px] h-[2px] bg-yellow-500" />
            </div>
            <div className="overflow-auto block">
                <table className="w-full border-collapse text-center border border-slate-500 overflow-hidden">
                    <thead className="bg-grey-400 text-md">
                        <tr className="h-10">
                            <th className="border border-slate-600 px-6">Image</th>
                            <th className="border border-slate-600 px-6">EMP No</th>
                            <th className="border border-slate-600 px-6">Name</th>
                            <th className="border border-slate-600 px-6">Email</th>
                            <th className="border border-slate-600 px-6">Telephone</th>
                            <th className="border border-slate-600 px-6">Role</th>
                            <th className="border border-slate-600 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, key) => (
                            <tr key={key} className={`h-10 ${user.role === 'ADMIN' ? 'bg-red-200' : user.role === 'EMPLOYEE' ? 'bg-yellow-200' : 'bg-green-200'}`}>
                                <td className="text-left border border-slate-700 px-6 whitespace-nowrap"><img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" /></td>
                                <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{user.empNo}</td>
                                <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{user.name}</td>
                                <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{user.email}</td>
                                <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{user.telephone}</td>
                                <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{user.role}</td>
                                <td className="text-left border border-slate-700 px-2 whitespace-nowrap">
                                    <div className='flex justify-center gap-5'>
                                        <button onClick={() => handleEdit(user)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg"><EditIcon /></button>
                                        <button onClick={() => handleView(user)} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-lg"><ListIcon /></button>
                                        <button onClick={() => handleDelete(user)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg"><DeleteIcon /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AllUsers;

