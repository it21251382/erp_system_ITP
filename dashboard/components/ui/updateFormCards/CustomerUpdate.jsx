import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerUpdate = () => {
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
