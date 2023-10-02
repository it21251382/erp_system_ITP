import React from "react";
import { useState } from "react";
import { api } from "@/utils/api";

const SupplierForm = () => {
  const [formData, setFormData] = useState({
    sup_name: "",
    sup_address: "",
    sup_email: "",
    sup_password: "",
    sup_phone: "",
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
      const response = await api.post("/supplier", formData);

      if (response.status === 201) {
        // Data successfully posted to mongo
        setSubmissionStatus("success");
        console.log("Data saved:", response.data.supplier);
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
            Supplier Information
          </h5>
          <div>
            <label
              for="sup_name"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Supplier name
            </label>
            <input
              type="text"
              name="sup_name"
              id="sup_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.sup_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="sup_address"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Supplier Address
            </label>
            <input
              type="text"
              name="sup_address"
              id="sup_address"
              placeholder="SSD-007"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.sup_address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="sup_email"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Supplier E-Mail
            </label>
            <input
              type="email"
              name="sup_email"
              id="sup_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.sup_email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label
                htmlFor="sup_phone"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                Supplier Phone-Number
              </label>
              <input
                type="text"
                name="sup_phone"
                id="sup_phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.sup_phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="sup_password"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                Supplier Password
              </label>
              <input
                type="password"
                name="sup_password"
                id="sup_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.sup_password}
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
  );
};

export default SupplierForm;
