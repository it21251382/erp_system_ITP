import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const SupplierDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function closeDropdown() {
    setIsDropdownOpen(false);
  }

  return (
    <div className="relative">
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        className="inline-flex items-center p-2 text-sm font-medium text-center dark:text-dark"
        type="button"
        onClick={toggleDropdown}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>

      {/* <!-- Dropdown menu --> */}
      <div
        ref={dropdownRef}
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
        style={{ top: "0", right: "100%" }} // Adjusted style properties
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Get Purchase Order
            </a>
          </li>
          <li>
            <a
              href="/updates/UpdateSupplierDetails"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Update Details
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupplierDropdown;
