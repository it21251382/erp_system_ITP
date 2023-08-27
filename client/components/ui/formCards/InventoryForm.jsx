import React from "react";

const InventoryForm = () => {
  return (
    <div>
      <form class="space-y-4" action="#">
        <h5 class="text-xl font-medium text-black-500">Product Information</h5>
        <div>
          <label
            for="name"
            class="block mb-1 text-sm font-medium text-black-500"
          >
            Product name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            for="sku"
            class="block mb-1 text-sm font-medium text-black-500"
          >
            SKU *
          </label>
          <input
            type="text"
            name="sku"
            id="sku"
            placeholder="SSD-007"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="flex space-x-4">
          <select
            id="countries"
            class="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Parent category</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
          <select
            id="countries"
            class="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-grey-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Child category</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div>
          <textarea
            id="description"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product description..."
          ></textarea>
        </div>

        <div className="flex space-x-4">
          <div className="w-full">
            <label
              htmlFor="cost"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Cost per unit *
            </label>
            <input
              type="text"
              name="cost"
              id="cost"
              placeholder="Rs."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Selling price per unit *
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Rs."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Warranty *
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="days"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>

        <div>
          <label
            for="stock_in_hand"
            class="block mb-1 text-sm font-medium text-black-500"
          >
            Stock in hand *
          </label>
          <input
            type="number"
            name="stock_in_hand"
            id="stock_in_hand"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label
            for="reorder_level"
            class="block mb-1 text-sm font-medium text-black-500"
          >
            Reorder level *
          </label>
          <input
            type="number"
            name="reorder_level"
            id="nareorder_levelme"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;
