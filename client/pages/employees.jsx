import React, { useState } from "react";
import { FaCubes, FaPlus, FaTrash, FaFileInvoiceDollar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/employee";
import TabBar from "../components/TabBar"; // Update the path
import { FaCubesStacked } from "react-icons/fa6";
import EmployeeForm from "@/components/ui/formCards/EmployeeForm";

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState("Employees"); // Default selected tab

  const tabs = [
    { tab: "Employees", icon: <FaCubesStacked /> },
    { tab: "Add Employee", icon: <FaPlus /> },
    { tab: "Delete Products", icon: <FaTrash /> },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2></h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <TabBar
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
      <div className="p-4">
        {selectedTab === "Employees" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span className="font-bold">Name</span>
                <span className="sm:text-left text-right font-bold">SKU</span>
                <span className="hidden md:grid font-bold">Stock On Hand</span>
                <span className="hidden sm:grid font-bold">Reorder level</span>
              </div>
              <ul>
                {data.map((employee, id) => (
                  <li
                    key={id}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                  >
                    <div className="flex"   onClick={() => {
                        console.log('Section clicked!');
                    }}>
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <FaCubes className="text-purple-800" />
                      </div>
                      <div className="pl-4">
                        <p className="text-gray-800 font-bold">
                          {employee.details.name}
                        </p>
                        <p className="text-gray-800 text-sm">
                          {employee.department}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 sm:text-left text-right">
                      <span
                        className={"bg-green-200 p-2 rounded-lg"}
                      >
                        {employee.details.phone}
                      </span>
                    </p>
                    <p className="hidden md:flex">{employee.email}</p>
                    <div className="sm:flex hidden justify-between items-center">
                      <p>{employee.details.nic}</p>
                      <BsThreeDotsVertical />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {selectedTab === "Add Products" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            < EmployeeForm/>
          </div>
        )}
        {selectedTab === "Delete Products" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            {/* ... Your delete order content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
