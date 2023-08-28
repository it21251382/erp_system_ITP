import React, { useState } from "react";
import {
  FaShoppingBag,
  FaPlus,
  FaTrash,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/order.js";
import TabBar from "../components/TabBar";
import InvoiceForm from "@/components/ui/formCards/OrderForm.jsx"; // Update the path

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState("Order"); // Default selected tab

  const tabs = [
    { tab: "Order", icon: <FaFileInvoiceDollar /> },
    { tab: "Add Order", icon: <FaPlus /> },
    // { tab: "Function Order", icon: <FaTrash /> },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Orders</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <TabBar
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
      <div className="p-4">
        {selectedTab === "Order" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span>Order</span>
                <span className="sm:text-left text-right">Status</span>
                <span className="hidden md:grid">Last Order</span>
                <span className="hidden sm:grid">Method</span>
              </div>
              <ul>
                {data.map((order, id) => (
                  <li
                    key={id}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                  >
                    <div className="flex">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <FaShoppingBag className="text-purple-800" />
                      </div>
                      <div className="pl-4">
                        <p className="text-gray-800 font-bold">
                          Rs.{order.total.toLocaleString()}
                        </p>
                        <p className="text-gray-800 text-sm">
                          {order.name.first}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 sm:text-left text-right">
                      <span
                        className={
                          order.status == "Processing"
                            ? "bg-green-200 p-2 rounded-lg"
                            : order.status == "Completed"
                            ? "bg-blue-200 p-2 rounded-lg"
                            : "bg-yellow-200 p-2 rounded-lg"
                        }
                      >
                        {order.status}
                      </span>
                    </p>
                    <p className="hidden md:flex">{order.date}</p>
                    <div className="sm:flex hidden justify-between items-center">
                      <p>{order.method}</p>
                      <BsThreeDotsVertical />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {selectedTab === "Add Order" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <InvoiceForm/>
          </div>
        )}
        {selectedTab === "Delete Order" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            {/* ... Your delete order content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
