"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Navigation from "../navigation/navigation"; // Adjust the import path as needed.

// Define the NavigationItem interface as mentioned above.
interface NavigationItem {
  sectionTitle?: string;
  title?: string;
  path?: string;
  icon?: string | JSX.Element;
  children?: NavigationItem[];
}
const SidebarMenu: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <nav
      className={`bg-[#ffffff] border-r-2 border-[#d9d9d9] shadow-lg h-screen text-black ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "justify-between"
        } p-4`}
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

      {/* Sidebar navigation links */}
      <ul className="p-4">
        {Navigation().map((item: NavigationItem, index: number) => (
          <React.Fragment key={index}>
            {item.sectionTitle && (
              <li className="text-gray-500 text-sm mt-2 mb-1">
                {item.sectionTitle}
              </li>
            )}
            {item.path && (
              <li>
                <Link
                  href={item.path}
                  className="flex items-center text-black hover:bg-gray-200 p-2 rounded-md"
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              </li>
            )}
            {item.children && (
              <ul>
                {item.children.map(
                  (child: NavigationItem, childIndex: number) => (
                    <li key={childIndex}>
                      <Link
                        href={child.path || ""}
                        className="flex items-center text-black hover:bg-gray-200 p-2 rounded-md ml-4"
                      >
                        {child.icon && (
                          <i className={`iconify mr-2 text-lg ${child.icon}`} />
                        )}
                        <span>{child.title}</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
