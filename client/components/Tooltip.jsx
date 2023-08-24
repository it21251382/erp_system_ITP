import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      <div
        className={`${
          showTooltip ? 'opacity-60' : 'opacity-0'
        } transition-opacity duration-300 absolute z-10 bg-gray-900 text-white p-2 rounded-md text-sm`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
