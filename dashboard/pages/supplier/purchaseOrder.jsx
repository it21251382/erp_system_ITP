import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const PurchaseOrder = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span className="font-bold">Name</span>
              <span className="sm:text-left text-right font-bold">
                Phone Number
              </span>
              <span className="hidden md:grid font-bold">E-Mail</span>
              <span className="hidden sm:grid font-bold">Address</span>
            </div>
              <ul>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
