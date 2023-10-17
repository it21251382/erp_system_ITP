import React, { useEffect, useState } from "react";
import LeaveTable from "../Home/components/LeaveTable";
import { GET } from "../../helpers/httpHelper";


function LeaveRequests({ decoded }) {
    const [leaves, setLeaves] = useState([]);


    const getLeaves = async () => {
        try {
            const response = await GET(`/leave/all/`);
            console.log(response.data.data);
            setLeaves(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLeaves();
    }, []);
    return (
        <div className="container mx-auto px-4 sm:px-8 ">
            <div className="justify-left flex flex-col py-5">
                <h1 className="text-lg sm:text-xl md:text-2xl uppercase">{decoded?.role === 'ADMIN' ? 'All Users' : 'My Leaves'}</h1>
                <span className="w-[100px] h-[2px] bg-yellow-500" />
            </div>
            <div className="flex flex-row items-center justify-start w-full">
                <LeaveTable leaves={leaves} decoded={decoded} getLeaves={getLeaves} />
            </div>
        </div>
    );
}

export default LeaveRequests;
