import React from "react";
import { useState } from "react";
import { api } from "@/utils/api";

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    inv_pro_name: "",
    sku: "",
    inv_pro_description: "",
    inv_pro_cost: "",
    inv_pro_selling: "",
    inv_pro_warranty: "",
    inv_pro_quantity: "",
    inv_pro_reorder_level: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/inventory", formData);

      if (response.status === 201) {
        // Data successfully posted to mongo
        setSubmissionStatus("success");
        console.log("Data saved:", response.data.inventory);
      } else {
        setSubmissionStatus("error");
        console.error("Error:", response.data.error);
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      {submissionStatus === "success" ? ( // Conditional rendering based on submissionStatus
        <div className="success-message">Data saved successfully!</div>
      ) : submissionStatus === "error" ? (
        <div className="error-message">Error: Data could not be saved.</div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit} action="#">
          <h5 className="text-xl font-medium text-black-500">
            Product Information
          </h5>
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
              value={formData.name}
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
              value={formData.sku}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* <div className="flex space-x-4">
          <select
            id="countries"
            className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Parent category</option>
            <option>Laptops</option>
            <option>Desktops</option>
            <option>Storage</option>
          </select>
          <select
            id="countries"
            className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Child category</option>
            <option>Gaming</option>
            <option>Productivity</option>
            <option>Workstation</option>
          </select>
        </div> */}
          <div>
            <textarea
              name="inv_pro_description"
              id="inv_pro_description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product description..."
              value={formData.description}
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
                value={formData.cost}
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
                value={formData.price}
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
                value={formData.warranty}
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
              value={formData.stock_in_hand}
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
              value={formData.reorder_level}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default InventoryForm;
