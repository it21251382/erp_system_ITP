import React from "react";
import { useState } from "react";
import { api } from "@/utils/api";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    cus_first_name: "",
    cus_last_name: "",
    cus_email: "",
    cus_password: "",
    cus_phone: "",
    cus_city: "",
    cus_zip: "",
    cus_address: "",
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
      const response = await api.post("/customer", formData);

      if (response.status === 201) {
        // Data successfully posted to mongo
        setSubmissionStatus("success");
        console.log("Data saved:", response.data.customer);
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
            Customer Information
          </h5>
          <div>
            <label
              for="cus_first_name"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              First Name
            </label>
            <input
              type="text"
              name="cus_first_name"
              id="cus_first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.cus_first_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="cus_last_name"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Last Name
            </label>
            <input
              type="text"
              name="cus_last_name"
              id="cus_last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.cus_last_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="cus_email"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Email
            </label>
            <input
              type="email"
              name="cus_email"
              id="cus_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.cus_email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="cus_password"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Password
            </label>
            <input
              type="password"
              name="cus_password"
              id="cus_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.cus_password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label
                htmlFor="cus_city"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                City
              </label>
              <input
                type="text"
                name="cus_city"
                id="cus_city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.cus_city}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="cus_zip"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                Zip code
              </label>
              <input
                type="text"
                name="cus_zip"
                id="cus_zip"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.cus_zip}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="cus_address"
                className="block mb-1 text-sm font-medium text-black-500"
              >
                Address
              </label>
              <input
                type="text"
                name="cus_address"
                id="cus_address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.cus_address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <label
              for="cus_phone"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Phone
            </label>
            <input
              type="number"
              name="cus_phone"
              id="cus_phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.cus_phone}
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

export default CustomerForm;
