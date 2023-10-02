import React, { useState, useEffect } from "react";
import axios from "axios";

const InventoryUpdate = () => {
  const [inventory, setInventory] = useState([]);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [inventoryData, setInventoryData] = useState({
    inv_pro_name: "",
    sku: "",
    inv_pro_description: "",
    inv_pro_cost: "",
    inv_pro_selling: "",
    inv_pro_warranty: "",
    inv_pro_quantity: "",
    inv_pro_reorder_level: "",
  });
  const [message, setMessage] = useState("")

  useEffect(() => {
    
  })

};
