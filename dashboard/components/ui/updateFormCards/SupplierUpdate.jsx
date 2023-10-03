import React, { useState, useEffect } from "react";
import axios from "axios";

const SupplierUpdate = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [supplierData, setSupplierData] = useState({
    sup_name: "",
    sup_address: "",
    sup_email: "",
    sup_password: "",
    sup_phone: "",
  });
  const [message, setMessage] = useState(""); // State to hold success/error message

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/supplier")
      .then((response) => {
        if (Array.isArray(response.data.supplier)) {
          setSuppliers(response.data.supplier);
        } else {
          console.error("Invalid API response:", response.data);
          // Handle the error, e.g., display an error message to the user
        }
      })
      .catch((error) => {
        console.error("Error fetching suppliers:", error);
        // Handle the error, e.g., display an error message to the user
      });
  }, []);

  const handleSupplierChange = (event) => {
    const selectedSupplierId = event.target.value;
    setSelectedSupplier(selectedSupplierId);
    setSupplierData({ ...supplierData, sup_name: "", sup_address: "" }); // Clear input fields
    setMessage(""); // Clear any previous messages

    // Fetch the data for the selected supplier
    axios
      .get(`http://localhost:5000/api/v1/supplier/${selectedSupplierId}`)
      .then((response) => {
        setSupplierData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching supplier data:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSupplierData({ ...supplierData, [name]: value });
  };

  const handleSave = () => {
    // Send a PATCH request to update the supplier data
    axios
      .patch(
        `http://localhost:5000/api/v1/supplier/${selectedSupplier}`,
        supplierData
      )
      .then((response) => {
        setMessage("Supplier data updated successfully.");
      })
      .catch((error) => {
        console.error("Error saving supplier data:", error);
        setMessage("Error updating supplier data. Please try again.");
      });
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-3">Supplier Update</h1>
      <div className="mb-4">
        <select
          onChange={handleSupplierChange}
          value={selectedSupplier || ""}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        >
          <option value="">Choose a supplier</option>
          {suppliers.length > 0 ? (
            suppliers.map((supplier) => (
              <option key={supplier._id} value={supplier._id}>
                {supplier.sup_name}
              </option>
            ))
          ) : (
            <option value="">No suppliers available</option>
          )}
        </select>
      </div>
      {selectedSupplier && (
        <div>
          {/* Render input fields for the supplier data */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Name:</label>
            <input
              type="text"
              name="sup_name"
              value={supplierData.sup_name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Address:</label>
            <input
              type="text"
              name="sup_address"
              value={supplierData.sup_address}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Email:</label>
            <input
              type="text"
              name="sup_email"
              value={supplierData.sup_email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Password:</label>
            <input
              type="text"
              name="sup_password"
              value={supplierData.sup_password}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Phone:</label>
            <input
              type="text"
              name="sup_phone"
              value={supplierData.sup_phone}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Save
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

export default SupplierUpdate;
