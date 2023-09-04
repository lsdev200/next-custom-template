"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; // You'll need to install react-icons
import { ImCross } from "react-icons/im";
import Image from "next/image";

const SidebarMenu: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={` bg-[#ffffff] border-r-2 border-[#d9d9d9] shadow-lg h-screen text-black ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "justify-between"
        }
p-4`}
      >
        {isCollapsed ? (
          <></>
        ) : (
          <Image
            src="/assets/img/devonix.png"
            alt="Company Logo"
            width={130}
            height={120}
            style={{ mixBlendMode: "multiply", marginLeft: "30px" }}
          />
        )}
        <button
          onClick={toggleSidebar}
          className="text-black focus:outline-none focus:text-black"
        >
          {isCollapsed ? (
            <ImCross className="text-md" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul className="p-2">
        <li className="mb-2">
          <Link href="/">
            <div
              className={`flex items-center hover:bg-[#ebedef] p-2 rounded  ${
                isCollapsed ? "flex items-center" : ""
              }`}
            >
              <FaHome
                size={20}
                className={`${isCollapsed ? "m-auto" : "mr-2"}`}
              />
              {isCollapsed ? null : "Home"}
            </div>
          </Link>
        </li>
        {/* <li className="mb-2">
          <Link href="/profile">
            <div
              className={`flex items-center hover:bg-gray-700 p-2 rounded  ${
                isCollapsed ? "flex items-center" : ""
              }`}
            >
              <FaUser
                size={20}
                className={`${isCollapsed ? "m-auto" : "mr-2"}`}
              />
              {isCollapsed ? null : "Profile"}
            </div>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/settings">
            <div
              className={`flex items-center hover:bg-gray-700 p-2 rounded  ${
                isCollapsed ? "flex items-center" : ""
              }`}
            >
              <FaCog
                size={20}
                className={`${isCollapsed ? "m-auto" : "mr-2"}`}
              />
              {isCollapsed ? null : "Settings"}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <div
              className={`flex items-center hover:bg-gray-700 p-2 rounded  ${
                isCollapsed ? "flex items-center" : ""
              }`}
            >
              <FaSignOutAlt
                size={20}
                className={`${isCollapsed ? "m-auto" : "mr-2"}`}
              />
              {isCollapsed ? null : "Logout"}
            </div>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
