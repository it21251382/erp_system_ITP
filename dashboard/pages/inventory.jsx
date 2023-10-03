import React, { useState, useEffect } from "react";
import { FaCubes, FaPlus } from "react-icons/fa";
import InventoryDropdown from "@/components/ui/3_dot_dropdown/InventoryDropdown";
import { data } from "@/data/inventory";
import TabBar from "../components/TabBar"; // Update the path
import { FaCubesStacked, FaPenToSquare } from "react-icons/fa6";
import InventoryForm from "@/components/ui/formCards/InventoryForm.jsx";
import { fetchInventory } from "./api/invApi";
import InventoryUpdate from "@/components/ui/updateFormCards/InventoryUpdate"

const Inventory = () => {
  const [selectedTab, setSelectedTab] = useState("Inventory"); // Default selected tab
  const [inventory, setInventory] = useState([]);

  const tabs = [
    { tab: "Inventory", icon: <FaCubesStacked /> },
    { tab: "Add Products", icon: <FaPlus /> },
    { tab: "Update Products", icon: <FaPenToSquare /> },
  ];

  useEffect(() => {
    if (selectedTab === "Inventory") {
      // Fetch inventory data when the "Inventory" tab is selected
      async function fetchInventoryData() {
        try {
          const inventoryData = await fetchInventory(); // Fetch the 'Inventory' array
          setInventory(inventoryData); // Set 'Inventory' with the 'Inventory' array
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchInventoryData();
    }
  }, [selectedTab]);

  const handleDeleteInventory = async (SKU) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/inventory/${SKU}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Remove the deleted inventory from the state
        setInventory((prevInventory) =>
        prevInventory.filter(
            (inventoryItem) => inventoryItem.sku !== SKU
          )
        );
      } else {
        // Handle error response if needed
        console.error("Error deleting inventory item:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting inventory item:", error);
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
        {selectedTab === "Inventory" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span className="font-bold">Name</span>
                <span className="sm:text-left text-right font-bold">SKU</span>
                <span className="hidden md:grid font-bold">Stock On Hand</span>
                <span className="hidden sm:grid font-bold">Reorder level</span>
              </div>
              {Array.isArray(inventory) && inventory.length > 0 ? (
              <ul>
                {inventory.map((inventoryItem, id) => (
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
                        <FaCubes className="text-purple-800" />
                      </div>
                      <div className="pl-4">
                        <p className="text-gray-800 font-bold">
                          {inventoryItem.inv_pro_name}
                        </p>
                        <p className="text-gray-800 text-sm">
                          Rs.{inventoryItem.inv_pro_selling.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 sm:text-left text-right">
                      <span className={"bg-green-200 p-2 rounded-lg"}>
                        {inventoryItem.sku}
                      </span>
                    </p>
                    <p className="hidden md:flex">{inventoryItem.inv_pro_quantity}</p>
                    <div className="sm:flex hidden justify-between items-center">
                      <p>{inventoryItem.inv_pro_reorder_level}</p>
                      <div className="ml-3">
                        <button
                          className="px-4 py-2 text-white bg-red-600 hover:bg-red-800 rounded-lg transition duration-300 ease-in-out"
                          onClick={() =>
                            handleDeleteInventory(inventoryItem.sku)
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
                <p>No Inventory data to show</p>
              )}
            </div>
          </div>
        )}
        {selectedTab === "Add Products" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <InventoryForm />
          </div>
        )}
        {selectedTab === "Update Products" && (
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <InventoryUpdate />
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
