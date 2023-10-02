import React, { useState } from "react";
import axios from "axios";

const UpdateSupplierDetailForm = () => {
  const [formData, setFormData] = useState({
    sup_name: "",
    sup_address: "",
    sup_email: "",
    sup_phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make an API request to update the item in the database
      const response = await axios.patch(
        `http://localhost:5000/api/v1/supplier/${formData.sup_phone}`,
        formData // Send the updated data
      );

      // Handle the response, e.g., show a success message
      console.log("Update Successful", response.data);

      // Optionally, reset the form or perform any other actions
      setFormData({
        sup_name: "",
        sup_address: "",
        sup_email: "",
        sup_phone: "",
      });
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Update Error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="sup_name" className="block text-gray-600 text-sm font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          id="sup_name"
          name="sup_name"
          value={formData.sup_name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sup_address" className="block text-gray-600 text-sm font-semibold mb-1">
          Address
        </label>
        <input
          type="text"
          id="sup_address"
          name="sup_address"
          value={formData.sup_address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter address"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sup_email" className="block text-gray-600 text-sm font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          id="sup_email"
          name="sup_email"
          value={formData.sup_email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sup_phone" className="block text-gray-600 text-sm font-semibold mb-1">
          Phone Number
        </label>
        <input
          type="text"
          id="sup_phone"
          name="sup_phone"
          value={formData.sup_phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter phone number"
        />
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
        Update
      </button>
    </form>
  );
};

export default UpdateSupplierDetailForm;
