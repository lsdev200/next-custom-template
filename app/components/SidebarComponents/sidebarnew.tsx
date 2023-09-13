"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Navigation from "../navigation/navigation";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

interface NavigationItem {
  sectionTitle?: string;
  title?: string;
  path?: string;
  icon?: string | JSX.Element;
  children?: NavigationItem[];
  isOpen?: boolean;
}

const SidebarMenu: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [navigation, setNavigation] = useState<NavigationItem[]>(Navigation());

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  const toggleProfile = (index: number) => {
    const updatedNavigation = [...navigation];
    updatedNavigation[index].isOpen = !updatedNavigation[index].isOpen;
    setNavigation(updatedNavigation);
  };

  return (
    <nav
      className={`bg-[#ffffff] border-r-2 border-[#d9d9d9] shadow-lg h-screen text-black overflow-auto scroll scroll-1   ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div
        className={`flex items-center cursor-pointer ${
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
          className="text-black focus:outline-none focus:text-black cursor-pointer"
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

      <ul className="p-4 cursor-pointer">
        {navigation.map((item: NavigationItem, index: number) => (
          <React.Fragment key={index}>
            {item.sectionTitle && (
              <li
                className={`text-gray-500 text-sm mt-2 mb-1 ${
                  isCollapsed ? "hidden" : ""
                }`}
              >
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
                  <span className={`ml-3 ${isCollapsed ? "hidden" : ""}`}>
                    {item.title}
                  </span>
                </Link>
              </li>
            )}
            {item.children && (
              <ul>
                <li>
                  <div
                    onClick={() => toggleProfile(index)}
                    className="flex items-center justify-between text-black hover:bg-gray-200 p-2 rounded-md"
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className={`ml-3 ${isCollapsed ? "hidden" : ""}`}>
                        {item.title}
                      </span>
                    </div>
                    <BsChevronRight
                      size={20}
                      className={`transition-transform transform opacity-50 ${
                        item.isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </li>

                {item.isOpen &&
                  item.children.map(
                    (child: NavigationItem, childIndex: number) => (
                      <li key={childIndex}>
                        <Link
                          href={child.path || ""}
                          className="flex items-center text-black hover:bg-gray-200 p-2 rounded-md ml-4 transition duration-1000"
                        >
                          {child.icon}
                          <span className="ml-3">{child.title}</span>
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
