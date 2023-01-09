"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-[#ffffff] text-white border-r-2 border-[#d9d9d9] ${
        isOpen ? "w-64" : "w-24"
      } transition-width ease-in-out duration-300`}
    >
      <div className="p-4 flex justify-center mt-2">
        <Image
          src="/assets/img/devonix.png"
          alt="Company Logo"
          width={120}
          height={120}
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      <nav className="py-2">
        <div className={`relative ${isOpen ? "block" : ""}`}>
          <Link
            href="/Dashboard"
            className="flex items-center py-2 px-4 hover:bg-[#ebedef] text-[#7d8893] hover:text-black"
          >
            {isOpen && (
              <>
                <BiSolidDashboard className="mr-2 text-xl" />
                Dashboard
              </>
            )}
            {!isOpen && (
              <>
                <BiSolidDashboard className="text-2xl" />
              </>
            )}
          </Link>
          <hr />
        </div>
      </nav>
      <button
        className="fixed bottom-4 left-4 bg-white p-2 rounded-full shadow-lg text-black"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <GiHamburgerMenu className="text-2xl" />
        ) : (
          <>
            <MdOutlineCancel className="text-2xl" />
          </>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
