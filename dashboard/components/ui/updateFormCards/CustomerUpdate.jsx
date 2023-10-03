import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerUpdate = () => {
  const [customer, setCustomer] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerData, setCustomerData] = useState({
    cus_first_name: "",
    cus_last_name: "",
    cus_email: "",
    cus_password: "",
    cus_phone: "",
    cus_city: "",
    cus_zip: "",
    cus_address: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/customer")
      .then((response) => {
        if (Array.isArray(response.data.customer)) {
          setCustomer(response.data.customer);
        } else {
          console.error("Invalid API response:", response.data);
          // Handle the error, e.g., display an error message to the user
        }
      })
      .catch((error) => {
        console.error("Error fetching customer :", error);
        // Handle the error, e.g., display an error message to the user
      });
  }, []);

  const handleCustomerChange = (event) => {
    const selectedCustomerId = event.target.value;
    setSelectedCustomer(selectedCustomerId);
    setCustomerData({
      ...customerData,
      cus_first_name: "",
      cus_address: "",
    }); // Clear input fields
    setMessage(""); // Clear any previous messages

    // Fetch the data for the selected customer
    axios
      .get(`http://localhost:5000/api/v1/customer/${selectedCustomerId}`)
      .then((response) => {
        setCustomerData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSave = () => {
    // Send a PATCH request to update the customer data
    axios
      .patch(
        `http://localhost:5000/api/v1/customer/${selectedCustomer}`,
        customerData
      )
      .then((response) => {
        setMessage("customer records updated successfully.");
      })
      .catch((error) => {
        console.error("Error saving customer records:", error);
        setMessage("Error updating customer data. Please try again.");
      });
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-3">Customer Update</h1>
      <div className="mb-4">
        <select
          onChange={handleCustomerChange}
          value={selectedCustomer || ""}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        >
          <option value="">Choose a customer</option>
          {customer.length > 0 ? (
            customer.map((customer) => (
              <option key={customer._id} value={customer._id}>
                {customer.cus_first_name}
              </option>
            ))
          ) : (
            <option value="">No customer records available</option>
          )}
        </select>
      </div>
      {selectedCustomer && (
        <div>
          {/* Render input fields for the customer data */}
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
              value={customerData.cus_first_name}
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
              value={customerData.cus_last_name}
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
              value={customerData.cus_email}
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
              value={customerData.cus_password}
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
                value={customerData.cus_city}
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
                value={customerData.cus_zip}
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
                value={customerData.cus_address}
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
              value={customerData.cus_phone}
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

export default CustomerUpdate;
