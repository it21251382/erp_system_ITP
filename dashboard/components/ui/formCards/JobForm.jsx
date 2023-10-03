import React from "react";
import { useState } from "react";
import { api } from "@/utils/api";

const JobForm = () => {
  const [formData, setFormData] = useState({
    cus_name: "",
    cus_phone: "",
    device: "",
    error_type: "",
    error_description: "",
    job_type: "",
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
      const response = await api.post("/job", formData);

      if (response.status === 201) {
        // Data successfully posted to mongo
        setSubmissionStatus("success");
        console.log("Data saved:", response.data.job);
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
            Job Information
          </h5>
          <div>
            <label
              for="cus_name"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Customer Name
            </label>
            <input
              type="text"
              name="cus_name"
              id="cus_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.cus_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="name"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Customer phone
            </label>
            <input
              type="text"
              name="cus_phone"
              id="cus_phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.cus_phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="device"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Device
            </label>
            <input
              type="text"
              name="device"
              id="device"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.device}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="name"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Error type
            </label>
            <input
              type="text"
              name="error_type"
              id="error_type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.error_type}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="error_description"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Error Description
            </label>
            <input
              type="text"
              name="error_description"
              id="error_description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.error_description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              for="job_type"
              className="block mb-1 text-sm font-medium text-black-500"
            >
              Job Type
            </label>
            <input
              type="text"
              name="job_type"
              id="job_type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.job_type}
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

export default JobForm;
