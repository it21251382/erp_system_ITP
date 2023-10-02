import React, { useState, useEffect } from "react";
import {
  FaCubes,
  FaPlus,
  FaTrash,
  FaFileInvoiceDollar,
  FaFrog,
  FaIdBadge,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/customer";
import TabBar from "../components/TabBar"; // Update the path
import { FaCubesStacked } from "react-icons/fa6";
import CustomerForm from "@/components/ui/formCards/CustomerForm";
import { fetchCustomer } from "./api/cusApi";

const Customer = () => {
  const [selectedTab, setSelectedTab] = useState("Customer"); // Default selected tab
  const [customer, setCustomer] = useState([]);

  const tabs = [
    { tab: "Customer", icon: <FaFrog /> },
    { tab: "Add Customer", icon: <FaPlus /> },
    // { tab: "Delete Customer", icon: <FaTrash /> },
  ];

  useEffect(() => {
    if (selectedTab === "Customer") {
      // Fetch customer data when the "Customer" tab is selected
      async function fetchCustomerData() {
        try {
          const customerData = await fetchCustomer(); // Fetch the 'Inventory' array
          setCustomer(customerData); // Set 'customer' with the 'Inventory' array
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchCustomerData();
    }
  }, [selectedTab]);

  const handleDeleteCustomer = async (cusPhone) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/customer/${cusPhone}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Remove the deleted customer from the state
        setCustomer((prevCustomer) =>
          prevCustomer.filter(
            (customerItem) => customerItem.cus_phone !== cusPhone
          )
        );
      } else {
        // Handle error response if needed
        console.error("Error deleting customer :", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting customer :", error);
    }
  };

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
        {selectedTab === "Customer" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span className="font-bold">Name</span>
                <span className="sm:text-left text-right font-bold">
                  Phone-Number
                </span>
                <span className="hidden md:grid font-bold">Address</span>
                <span className="hidden sm:grid font-bold">Zip</span>
              </div>
              {Array.isArray(customer) && customer.length > 0 ? (
                <ul>
                  {customer.map((customerItem, id) => (
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
                          <FaIdBadge className="text-purple-800" />
                        </div>
                        <div className="pl-4">
                          <p className="text-gray-800 font-bold">
                            {customerItem.cus_first_name}
                          </p>
                          <p className="text-gray-800 text-sm">
                            {customerItem.cus_city}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 sm:text-left text-right">
                        <span className={"bg-green-200 p-2 rounded-lg"}>
                          {customerItem.cus_phone}
                        </span>
                      </p>
                      <p className="hidden md:flex">
                        {customerItem.cus_address}
                      </p>
                      <div className="sm:flex hidden justify-between items-center">
                        <p>{customerItem.cus_zip}</p>
                        <div className="ml-3">
                          <button
                            className="px-4 py-2 text-white bg-red-600 hover:bg-red-800 rounded-lg transition duration-300 ease-in-out"
                            onClick={() =>
                              handleDeleteInventory(customerItem.cus_phone)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No Data to show</p>
              )}
            </div>
          </div>
        )}
        {selectedTab === "Add Customer" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <CustomerForm />
          </div>
        )}
        {selectedTab === "Delete Customer" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            {/* ... Your delete order content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Customer;
