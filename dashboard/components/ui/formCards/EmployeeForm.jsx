import React from 'react'

const EmployeeForm = () => {
  return (
    <div>
      <form className="space-y-4" action="#">
        <h5 className="text-xl font-medium text-black-500">Employee Information</h5>
        <div>
          <label
            for="name"
            className="block mb-1 text-sm font-medium text-black-500"
          >
            Employee name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
            required
          />
        </div>
        <div>
          <label
            for="sku"
            className="block mb-1 text-sm font-medium text-black-500"
          >
           Phone-num
          </label>
          <input
            type="text"
            name="sku"
            id="sku"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5"
            required
          />
        </div>
        <div>
          <label
            for="sku"
            className="block mb-1 text-sm font-medium text-black-500"
          >
            NIC
          </label>
          <input
            type="text"
            name="sku"
            id="sku"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
            required
          />
        </div>
        <div className="flex space-x-4">
          <select
            id="countries"
            className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Department</option>
            <option>Accounting</option>
            <option>Technician</option>
            <option>Sales</option>
            <option>HR</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <div className="w-full">
            <label
              htmlFor="cost"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              E-mail
            </label>
            <input
              type="email"
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
              Password
            </label>
            <input
              type="password"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
    </div>
  )
}

export default EmployeeForm