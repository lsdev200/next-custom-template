"use client";

import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa"; // You'll need to install react-icons

const DropdownMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        Menu <FaCaretDown className="inline-block ml-2" />
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Item 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Item 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Item 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

//! TODO:
// menu icon up down arrow
//open position set
//make attractive with transition...
