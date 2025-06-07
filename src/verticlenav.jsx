import React, { useState } from "react";

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-900 p-4"> {/* Adjust width and background color */}
        <h2 className="text-white text-xl mb-4">Navigation</h2>
        <ul className="space-y-4">
          <li
            className={`text-white cursor-pointer p-2 rounded ${
              activeIndex === 0 ? "bg-purple-600" : ""
            }`}
            onMouseEnter={() => setActiveIndex(0)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            Quote 1
          </li>
          <li
            className={`text-white cursor-pointer p-2 rounded ${
              activeIndex === 1 ? "bg-blue-600" : ""
            }`}
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            Quote 2
          </li>
          <li
            className={`text-white cursor-pointer p-2 rounded ${
              activeIndex === 2 ? "bg-green-600" : ""
            }`}
            onMouseEnter={() => setActiveIndex(2)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            Quote 3
          </li>
          <li
            className={`text-white cursor-pointer p-2 rounded ${
              activeIndex === 3 ? "bg-yellow-600" : ""
            }`}
            onMouseEnter={() => setActiveIndex(3)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            Quote 4
          </li>
        </ul>
      </div>

      <div className="flex-1 flex justify-center items-center">
        {/* Main content area */}
        <div className="flex w-full h-[230px]">
          {/* Your existing quote cards */}
          {/* Replace this section with your existing code for quote cards */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
