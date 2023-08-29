import React from 'react';

const TabBar = ({ tabs, selectedTab, onSelectTab }) => {
  return (
    <div className='flex border-b ml-4 mt-2'>
      {tabs.map((tabObj) => (
        <button
          key={tabObj.tab}
          className={`flex items-center py-2 px-4 transition-colors ${
            tabObj.tab === selectedTab
              ? 'text-purple-600 bg-gray-300 rounded-lg'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          onClick={() => onSelectTab(tabObj.tab)}
        >
          {tabObj.icon && <span className='mr-2'>{tabObj.icon}</span>}
          <span>{tabObj.tab}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
