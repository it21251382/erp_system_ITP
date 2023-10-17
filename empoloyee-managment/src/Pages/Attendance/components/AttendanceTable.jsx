import React, { useEffect, useState } from "react";
import { GET } from "../../../helpers/httpHelper";

function AttendanceTable({ decoded }) {

    const [attendance, setAttendance] = useState([]);

    const getAttendance = async () => {
        try {
            const response = await GET(`employee/attendence/${localStorage.getItem("userId")}`);
            console.log(response.data.data);
            setAttendance(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAttendance();
    }, []);

    return (
        <div className="overflow-auto block">
            <table className="border-collapse text-center border border-slate-500 overflow-hidden bg-white">
                <thead className="bg-grey-400 text-md">
                    <tr className="h-10">
                        <th className="border border-slate-600 px-6">Data</th>
                        <th className="border border-slate-600 px-6">Log In Time</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((user, key) => (
                        <tr key={key} className="h-10">
                            <td className="border border-slate-600 px-6">{new Date(user.date).toDateString()}</td>
                            <td className="border border-slate-600 px-6">{new Date(user.date).toLocaleTimeString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default AttendanceTable;
