import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCashRegister, FaChartColumn, FaUserGroup, FaUserTie, FaDolly, FaHandsHoldingCircle, FaShieldHalved } from "react-icons/fa6";
import Tooltip from './Tooltip';



const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Tooltip text="Dashboard">
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <FaChartColumn size={20} />
            </div>
          </Link>
          </Tooltip>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Tooltip text="Order">
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaCashRegister size={20} />
            </div>
          </Link>
          </Tooltip>
          <Tooltip text="Inventory">
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaDolly size={20} />
            </div>
          </Link>
          </Tooltip>
          <Tooltip text="Supplier">
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaHandsHoldingCircle size={20} />
            </div>
          </Link>
          </Tooltip>
          <Tooltip text="Employees">
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaUserTie size={20} />
            </div>
          </Link>
          </Tooltip>
          <Tooltip text="Warranty">
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaShieldHalved size={20} />
            </div>
          </Link>
          </Tooltip>
          <Tooltip text="Customer">
          <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaUserGroup size={20} />
            </div>
          </Link>
          </Tooltip>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
