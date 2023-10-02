import React, { useState } from "react";
import { FaCubes, FaPlus } from "react-icons/fa";
import InventoryDropdown from "@/components/ui/3_dot_dropdown/InventoryDropdown";
import { data } from "@/data/inventory";
import TabBar from "../components/TabBar"; // Update the path
import { FaCubesStacked } from "react-icons/fa6";
import InventoryForm from "@/components/ui/formCards/InventoryForm.jsx";

const Inventory = () => {
  const [selectedTab, setSelectedTab] = useState("Inventory"); // Default selected tab

  const tabs = [
    { tab: "Inventory", icon: <FaCubesStacked /> },
    { tab: "Add Products", icon: <FaPlus /> },
    // { tab: "Delete Products", icon: <FaTrash /> },
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
        {selectedTab === "Inventory" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span className="font-bold">Name</span>
                <span className="sm:text-left text-right font-bold">SKU</span>
                <span className="hidden md:grid font-bold">Stock On Hand</span>
                <span className="hidden sm:grid font-bold">Reorder level</span>
              </div>
              <ul>
                {data.map((inventory, id) => (
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
                          {inventory.name.product}
                        </p>
                        <p className="text-gray-800 text-sm">
                          {inventory.name.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 sm:text-left text-right">
                      <span
                        className={"bg-green-200 p-2 rounded-lg"}
                      >
                        {inventory.sku}
                      </span>
                    </p>
                    <p className="hidden md:flex">{inventory.stockOnHand}</p>
                    <div className="sm:flex hidden justify-between items-center">
                      <p>{inventory.reorderLevel}</p>
                      <InventoryDropdown />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {selectedTab === "Add Products" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            < InventoryForm/>
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

export default Inventory;
