import React, { useState, useEffect } from "react";
import axios from "axios";

const InventoryUpdate = () => {
  const [inventory, setInventory] = useState([]);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [inventoryData, setInventoryData] = useState({
    inv_pro_name: "",
    sku: "",
    inv_pro_description: "",
    inv_pro_cost: "",
    inv_pro_selling: "",
    inv_pro_warranty: "",
    inv_pro_quantity: "",
    inv_pro_reorder_level: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/inventory")
      .then((response) => {
        if (Array.isArray(response.data.inventory)) {
          setInventory(response.data.inventory);
        } else {
          console.error("Invalid API response:", response.data);
          // Handle the error, e.g., display an error message to the user
        }
      })
      .catch((error) => {
        console.error("Error fetching inventory products:", error);
        // Handle the error, e.g., display an error message to the user
      });
  }, []);

  const handleInventoryChange = (event) => {
    const selectedInventoryId = event.target.value;
    setSelectedInventory(selectedInventoryId);
    setInventoryData({
      ...inventoryData,
      inv_pro_name: "",
      inv_pro_description: "",
    }); // Clear input fields
    setMessage(""); // Clear any previous messages

    // Fetch the data for the selected inventory
    axios
      .get(`http://localhost:5000/api/v1/inventory/${selectedInventoryId}`)
      .then((response) => {
        setInventoryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory data:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInventoryData({ ...inventoryData, [name]: value });
  };

  const handleSave = () => {
    // Send a PATCH request to update the inventory data
    axios
      .patch(
        `http://localhost:5000/api/v1/inventory/${selectedInventory}`,
        inventoryData
      )
      .then((response) => {
        setMessage("Inventory records updated successfully.");
      })
      .catch((error) => {
        console.error("Error saving inventory records:", error);
        setMessage("Error updating inventory data. Please try again.");
      });
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-3">Inventory Update</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">
          Select a Product:
        </label>
        <select
          onChange={handleInventoryChange}
          value={selectedInventory || ""}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        >
          {inventory.length > 0 ? (
            inventory.map((inventory) => (
              <option key={inventory._id} value={inventory._id}>
                {inventory.sku}
              </option>
            ))
          ) : (
            <option value="">No inventory records available</option>
          )}
        </select>
      </div>
      {selectedInventory && (
        <div>
          {/* Render input fields for the inventory data */}
          <div>
            <label
              for="name"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Product name
            </label>
            <input
              type="text"
              name="inv_pro_name"
              id="inv_pro_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={inventoryData.inv_pro_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="sku"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              SKU
            </label>
            <input
              type="text"
              name="sku"
              id="sku"
              placeholder="SSD-007"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={inventoryData.sku}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mt-3 mb-3">
            <textarea
              name="inv_pro_description"
              id="inv_pro_description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product description..."
              value={inventoryData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label
                htmlFor="cost"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                Cost per unit
              </label>
              <input
                type="number"
                name="inv_pro_cost"
                id="inv_pro_cost"
                placeholder="Rs."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={inventoryData.cost}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                Selling price per unit
              </label>
              <input
                type="number"
                name="inv_pro_selling"
                id="inv_pro_selling"
                placeholder="Rs."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={inventoryData.price}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                Warranty
              </label>
              <input
                type="number"
                name="inv_pro_warranty"
                id="inv_pro_warranty"
                placeholder="days"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={inventoryData.warranty}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <label
              for="stock_in_hand"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Quantity
            </label>
            <input
              type="number"
              name="inv_pro_quantity"
              id="inv_pro_quantity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={inventoryData.stock_in_hand}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              for="reorder_level"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Reorder level
            </label>
            <input
              type="number"
              name="inv_pro_reorder_level"
              id="inv_pro_reorder_level"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={inventoryData.reorder_level}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-3"
          >
            Update
          </button>
          {message && (
            <p
              className={`text-lg font-semibold p-2 ${
                message.includes("Error")
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              } rounded-lg`}
            >
              {message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InventoryUpdate;
