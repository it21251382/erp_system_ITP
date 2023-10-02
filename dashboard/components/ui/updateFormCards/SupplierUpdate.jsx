import React, { useState, useEffect } from "react";
import axios from "axios";

const SupplierUpdate = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [supplierData, setSupplierData] = useState({
    // Defining fields for sup data
    sup_name: "",
    sup_address: "",
    sup_email: "",
    sup_password: "",
    sup_phone: "",
  });

  useEffect(() => {
    // Fetch the list of suppliers when the component mounts
    axios.get('http://localhost:5000/api/v1/supplier')
      .then((response) => {
        setSuppliers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching suppliers:', error);
      });
  }, []);

  const handleSupplierChange = (event) => {
    const selectedSupplierId = event.target.value;
    setSelectedSupplier(selectedSupplierId);

    // Fetch the data for the selected supplier
    axios.get(`http://localhost:5000/api/v1/supplier/${selectedSupplierId}`) // Replace with your API endpoint
      .then((response) => {
        setSupplierData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching supplier data:', error);
      });
  };

  return <div>SupplierUpdate</div>;
};

export default SupplierUpdate;
