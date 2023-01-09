"use client";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiBell, BiUserCircle, BiLogOut } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState("");

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeModal && !(event.target as HTMLElement).closest(".modal")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeModal]);

  return (
    <header className="bg-white border-b-2 border-[#d9d9d9] shadow-sm h-20 flex items-center">
      <div className="container mx-auto px-4 py-7 flex justify-end">
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <BiBell className="w-6 h-6 md:h-7 lg:h-8 xl:h-9" />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => openModal("logout")}
          >
            <FaUserTie className="w-6 h-6 md:h-7 lg:h-8 xl:h-9" />
          </button>
        </div>
      </div>
      {activeModal === "logout" && (
        <div className="absolute right-0 mt-24 w-40 bg-white border rounded shadow-md modal animate__animated animate__fadeIn">
          <Link
            href="/api/auth/signout"
            className=" w-full py-2 text-left px-4 hover:bg-gray-100 flex items-center"
            onClick={() => {
              signOut();
            }}
          >
            <BiLogOut className="mr-2" /> Logout
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
