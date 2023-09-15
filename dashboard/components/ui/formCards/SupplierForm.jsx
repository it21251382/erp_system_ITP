import React from 'react';

const SupplierForm =()=>{
    return (
        <div>
      <form className="space-y-4" action="#">
        <h5 className="text-xl font-medium text-black-500">Supplier Information</h5>
        <div>
          <label
            for="name"
            className="block mb-1 text-sm font-medium text-black-500"
          >
            Supplier name
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
           Address
          </label>
          <input
            type="text"
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
           Phone
          </label>
          <input
            type="text"
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
           Email
          </label>
          <input
            type="text"
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
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Save
        </button>
      </form>
    </div>
    )
}

export default SupplierForm;