import React, { useState, useEffect } from "react";
import { FaBoxOpen, FaPlus, FaTrash } from "react-icons/fa";
import SupplierDropdown from "@/components/ui/3_dot_dropdown/SupplierDropdown";
import TabBar from "../components/TabBar";
import SupplierForm from "@/components/ui/formCards/SupplierForm";
import { FaPeopleRoof } from "react-icons/fa6";
import { fetchSuppliers } from "./api/supApi.js";

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState("Suppliers"); // Default selected tab
  const [suppliers, setSuppliers] = useState([]);

  const tabs = [
    { tab: "Suppliers", icon: <FaBoxOpen /> },
    { tab: "Add Suppliers", icon: <FaPlus /> },
    // { tab: "Delete Suppliers", icon: <FaTrash /> },
  ];

  useEffect(() => {
    if (selectedTab === "Suppliers") {
      // Fetch suppliers data when the "Suppliers" tab is selected
      async function fetchSupplierData() {
        try {
          const supplierData = await fetchSuppliers(); // Fetch the 'supplier' array
          setSuppliers(supplierData); // Set 'suppliers' with the 'supplier' array
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchSupplierData();
    }
  }, [selectedTab]);
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Welcome Back, Clint</h2>
      </div>
      <TabBar
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
      <div className="p-4">
        {selectedTab === "Suppliers" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            {Array.isArray(suppliers) && suppliers.length > 0 ? (
              <ul>
                {suppliers.map((supplierItem, id) => (
                  <li
                    key={id}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                  >
                    <div
                      className="flex"
                      onClick={() => {
                        console.log("Section clicked!");
                      }}
                    >
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <FaPeopleRoof className="text-purple-800" />
                      </div>
                      <div className="pl-4">
                        <p className="text-gray-800 font-bold">
                          {supplierItem.sup_name}
                        </p>
                        <p className="text-gray-800 text-sm">
                          {supplierItem.sup_email}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 sm:text-left text-right">
                      <span className={"p-2 rounded-lg"}>
                        {supplierItem.sup_phone}
                      </span>
                    </p>
                    <p className="hidden md:flex">{supplierItem.sup_email}</p>
                    <div className="sm:flex hidden justify-between items-center">
                      <p>{supplierItem.sup_address}</p>
                      <SupplierDropdown />
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No suppliers data available.</p>
            )}
          </div>
        )}
        {selectedTab === "Add Suppliers" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <SupplierForm />
          </div>
        )}
        {selectedTab === "Delete Suppliers" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            {/* ... Your delete order content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
