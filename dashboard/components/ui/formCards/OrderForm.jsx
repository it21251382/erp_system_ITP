import React from "react";
import { useState } from "react";
import { api } from "@/utils/api";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    cus_name: "",
    item_sku: "",
    quantity: "",
    order_date: "",
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
      const response = await api.post("/order", formData);

      if (response.status === 201) {
        // Data successfully posted to mongo
        setSubmissionStatus("success");
        console.log("Data saved:", response.data.order);
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
            Order Information
          </h5>
          <div>
            <label
              for="name"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Customer Name
            </label>
            <input
              type="text"
              name="cus_name"
              id="cus_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.cus_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="item_sku"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              SKU
            </label>
            <input
              type="text"
              name="item_sku"
              id="item_sku"
              placeholder="SSD-007"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.item_sku}
              onChange={handleInputChange}
              required
            />
          </div>
        

          <div className="flex space-x-4">
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
            </div>
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
  )
};

export default OrderForm;
