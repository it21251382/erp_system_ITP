import React from "react";
import AttendanceTable from "./components/AttendanceTable";

function Attendance({ decoded }) {
    return (
        <div className="container mx-auto px-4 sm:px-8 ">
            <div className="justify-left flex flex-col py-5">
                <h1 className="text-lg sm:text-xl md:text-2xl uppercase">My Attendance</h1>
                <span className="w-[100px] h-[2px] bg-yellow-500" />
            </div>
            <AttendanceTable decoded={decoded} />
        </div>
    );
}

export default Attendance;
