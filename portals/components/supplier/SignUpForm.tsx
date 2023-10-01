"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    sup_name: "",
    sup_phone: "",
    sup_email: "",
    sup_password: "",
    sup_address: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/supplier",
        formData
      );

      if (response.status === 201) {
        // Data successfully posted
        setSubmissionStatus("success");
        console.log("Data saved successfully:", response.data);

        // Redirect to the desired page
      router.push('/supplier/dash');
      
      } else {
        setSubmissionStatus("error");
        console.error("Error:", response.data.error);
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error saving data:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto md:px-6 lg:px-8 md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-xl font-semibold text-gray-900 dark:text-white"
        >
          <h2>Supplier Dash</h2>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg md:text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Sign-up to our system
            </h1>
            {submissionStatus === "success" && (
              <div className="bg-green-100 border border-green-500 text-green-800 px-4 py-2 rounded-md">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0a10 10 0 100 20 10 10 0 000-20zM9.293 13.293a1 1 0 001.414 0L14 10.414l1.293 1.293a1 1 0 101.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Data saved successfully!
                </div>
              </div>
            )}
            {submissionStatus === "error" && (
              <div className="bg-red-100 border border-red-500 text-red-800 px-4 py-2 rounded-md">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0a10 10 0 100 20 10 10 0 000-20zM9 11a1 1 0 011-1h1a1 1 0 110 2H10a1 1 0 01-1-1zm0-3a1 1 0 011-1h1a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Error: Data could not be saved.
                </div>
              </div>
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label
                    htmlFor="sup_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="sup_name"
                    id="sup_name"
                    value={formData.sup_name}
                    onChange={handleInputChange}
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <label
                    htmlFor="sup_phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="sup_phone"
                    id="sup_phone"
                    value={formData.sup_phone}
                    onChange={handleInputChange}
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sup_email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Email
                </label>
                <input
                  type="email"
                  name="sup_email"
                  id="sup_email"
                  value={formData.sup_email}
                  onChange={handleInputChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="sup_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="sup_password"
                  id="sup_password"
                  value={formData.sup_password}
                  onChange={handleInputChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="sup_address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Address
                </label>
                <input
                  type="text"
                  name="sup_address"
                  id="sup_address"
                  value={formData.sup_address}
                  onChange={handleInputChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex justify-center items-center mt-5">
                <button
                  type="submit"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
