import React, { useState } from "react";
import { FaPlus, FaTrash, FaScroll, FaWaveSquare } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/job";
import TabBar from "../components/TabBar"; // Update the path
import JobForm from "@/components/ui/formCards/JobForm";

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState("Jobs"); // Default selected tab

  const tabs = [
    { tab: "Jobs", icon: <FaScroll /> },
    { tab: "Create Job", icon: <FaPlus /> },
    { tab: "Delete Job", icon: <FaTrash /> },
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
        {selectedTab === "Jobs" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span className="font-bold">Name</span>
                <span className="sm:text-left text-right font-bold">SKU</span>
                <span className="hidden md:grid font-bold">Stock On Hand</span>
                <span className="hidden sm:grid font-bold">Reorder level</span>
              </div>
              <ul>
                {data.map((job, id) => (
                  <li
                    key={id}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                  >
                    <div className="flex"   onClick={() => {
                        console.log('Section clicked!');
                    }}>
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <FaWaveSquare className="text-purple-800" />
                      </div>
                      <div className="pl-4">
                        <p className="text-gray-800 font-bold">
                          {job.id}
                        </p>
                        <p className="text-gray-800 text-sm">
                          {job.job_type}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-100 sm:text-left text-right">
                      <span
                        className={"bg-red-500 p-2 rounded-lg"}
                      >
                        {job.error_type}
                      </span>
                    </p>
                    <p className="hidden md:flex">{job.created_date}</p>
                    <div className="sm:flex hidden justify-between items-center">
                      <p>{job.error_description}</p>
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
            < JobForm/>
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
