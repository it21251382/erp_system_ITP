import { toastFail, toastSuccess } from "../../../Components/Shared/ToastNotification";
import { PUT } from "../../../helpers/httpHelper";

function LeaveTable({ leaves, decoded, getLeaves }) {
    // approve/:id/:approve
    const handleApprove = async (userId, status) => {
        try {
            if (!window.confirm(`Are you sure you want to ${status === 'APPROVED' ? 'Approve' : 'Reject'} this leave request?`)) return;
            const response = await PUT(`/leave/approve/${userId?._id}/${status === 'APPROVED' ? 1 : 0}`);
            console.log(response.data.data);
            toastSuccess(`Leave Request ${status === 'APPROVED' ? 'Approved' : 'Rejected'} Successfully`);
            getLeaves();
        } catch (error) {
            console.log(error);
            toastFail(`${error?.response?.data?.message ? error?.response?.data?.message : 'Something went wrong'}`);
        }
    };


    return (
        <div className="overflow-auto block w-full">
            <table className="w-full border-collapse text-center border border-slate-500 overflow-hidden bg-white">
                <thead className="bg-grey-400 text-md">
                    <tr className="h-10">
                        <th className="border border-slate-600 px-6">Image</th>
                        <th className="border border-slate-600 px-6">EMP No</th>
                        <th className="border border-slate-600 px-6">Name</th>
                        <th className="border border-slate-600 px-6">Email</th>
                        <th className="border border-slate-600 px-6">Telephone</th>
                        <th className="border border-slate-600 px-6">Reason</th>
                        <th className="border border-slate-600 px-6">Date</th>
                        <th className="border border-slate-600 px-6">Status</th>
                        {decoded?.role === 'ADMIN' && <th className="border border-slate-600 px-6">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {leaves?.map((leave, key) => (
                        <tr key={key} className={`h-10 ${leave?.employee?.role === 'ADMIN' ? 'bg-red-200' : leave?.employee?.role === 'EMPLOYEE' ? 'bg-white' : 'bg-green-200'}`}>
                            <td className="text-left border border-slate-700 px-6 whitespace-nowrap"><img src={leave?.employee?.image} alt={leave?.employee?.name} className="w-10 h-10 rounded-full" /></td>
                            <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{leave?.employee?.empNo}</td>
                            <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{leave?.employee?.name}</td>
                            <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{leave?.employee?.email}</td>
                            <td className="text-left border border-slate-700 px-6 whitespace-nowrap">{leave?.employee?.telephone}</td>
                            <td className="text-left border border-slate-700 px-2 whitespace-nowrap">{leave?.reason}</td>
                            <td className="text-left border border-slate-700 px-2 whitespace-nowrap">{new Date(leave?.date).toLocaleDateString()}</td>
                            <td className="text-left border border-slate-700 px-2 whitespace-nowrap">
                                {
                                    leave?.status === 'PENDING' ? <span className="bg-yellow-500 text-white font-bold py-1 px-2 rounded-lg">{leave?.status}</span> : leave?.status === 'APPROVED' ? <span className="bg-green-500 text-white font-bold py-1 px-2 rounded-lg">{leave?.status}</span> : <span className="bg-red-500 text-white font-bold py-1 px-2 rounded-lg">{leave?.status}</span>
                                }
                            </td>
                            {decoded?.role === 'ADMIN' && (
                                <td className="text-left border border-slate-700 px-6 whitespace-nowrap">
                                    <div className='flex justify-center gap-5'>
                                        <button onClick={() => handleApprove(leave, 'APPROVED')} className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-lg w-[80px]">Approve</button>
                                        <button onClick={() => handleApprove(leave, 'REJECTED')} className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg w-[80px]">Reject</button>
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LeaveTable;
