import React from "react";

const CustomerForm = () => {
  return (
    <div>
      <form className="space-y-4" action="#">
        <h5 className="text-xl font-medium text-black-500">
          Customer Information
        </h5>
        <div>
          <label
            for="name"
            className="block mb-1 text-sm font-medium text-black-500"
          >
            First Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            for="name"
            className="block mb-1 text-sm font-medium text-black-500"
          >
            Last Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            for="sku"
            className="block mb-1 text-sm font-medium text-black-500"
          >
            Email
          </label>
          <input
            type="email"
            name="sku"
            id="sku"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            for="sku"
            className="block mb-1 text-sm font-medium text-black-500"
          >
            Password
          </label>
          <input
            type="password"
            name="sku"
            id="sku"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-full">
            <label
              htmlFor="cost"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              City
            </label>
            <input
              type="text"
              name="cost"
              id="cost"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Zip code
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Address
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>

        <div>
          <label
            for="stock_in_hand"
            className="block mb-1 text-sm font-medium text-black-500"
          >
            Phone
          </label>
          <input
            type="number"
            name="stock_in_hand"
            id="stock_in_hand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
    </div>
  );
};

export default CustomerForm;
