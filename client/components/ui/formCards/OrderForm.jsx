import React from "react";

const OrderForm = () => {
  return (
    <div>
      <div>
        <form className="space-y-4" action="#">
          <h5 className="text-xl font-medium text-black-500">
            Order Information
          </h5>

          <div className="flex space-x-4">
            <select
              id="countries"
              className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select customer</option>
              <option>Gajendra</option>
              <option>Jagath</option>
              <option>Niomi</option>
            </select>
            <select
              id="countries"
              className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Choose rep</option>
              <option>Ecommerce</option>
              <option>Shehan</option>
              <option>Shalani</option>
            </select>
          </div>

          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span>Item details</span>
                <span className="sm:text-left text-right">Quantity</span>
                <span className="hidden md:grid">Rate</span>
                <span className="hidden sm:grid">Amount</span>
              </div>
              <ul>
                <li className="bg-gray-50 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">
                  <div className="mr-5">
                    <input
                      type="text"
                      name="cost"
                      id="cost"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="cost"
                      id="cost"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="cost"
                      id="cost"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5"
                      required
                    />
                  </div>
                  <div className="sm:flex hidden justify-between items-center">
                    <input
                      type="number"
                      name="cost"
                      id="cost"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Add another
                    </button>
                  </div>
                </li>
                <div className="flex justify-between px-4 pt-4">
                  <h2></h2>
                  <h2>Grand Total: Rs.19,000/=</h2>
                </div>
                <select
                  id="countries"
                  className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Method</option>
                  <option>Cash</option>
                  <option>Visa</option>
                  <option>PayPal</option>
                </select>
              </ul>
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
    </div>
  );
};

export default OrderForm;
