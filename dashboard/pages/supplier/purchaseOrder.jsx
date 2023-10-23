import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const PurchaseOrder = () => {
  const router = useRouter();
  const { productTypes } = router.query;
  const [suppliedProductTypes, setSuppliedProductTypes] = useState([]);
  const [availableProductTypes, setAvailableProductTypes] = useState([]);

  // Fetch available product types
  useEffect(() => {
    // Make an API request to fetch available product types
    axios
      .get("http://localhost:5000/api/v1/supProd")
      .then((response) => {
        setAvailableProductTypes(response.data.supProd || []);
      })
      .catch((error) => {
        console.error("Error fetching product types:", error);
      });
  }, []);

  // Set supplied product types
  useEffect(() => {
    if (productTypes) {
      const parsedProductTypes = JSON.parse(productTypes);
      setSuppliedProductTypes(parsedProductTypes);
    }
  }, [productTypes]);

  // Function to get product name by ID
  const getProductNameById = (id) => {
    const product = availableProductTypes.find((item) => item._id === id);
    return product ? product.name : "Product Not Found";
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span className="font-bold">Supplying Product</span>
          </div>
          <ul>
            {suppliedProductTypes.map((productTypeId, index) => (
              <li key={index} className="p-2">
                Product Name: {getProductNameById(productTypeId)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
