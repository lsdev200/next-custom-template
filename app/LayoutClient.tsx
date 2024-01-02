"use client";

import React, { useEffect, useState } from "react";
import SidebarMenu from "./components/SidebarComponents/sidebarnew";
import Navbar from "./components/navbarComponents/Navbar";
import LoginClient from "./Login/LoginClient";
import withAuth from "./hooks/withAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the item exists in localStorage
    const storedItem = localStorage.getItem("user");

    // Set the isLoggedIn state based on the presence of the item
    setIsLoggedIn(!!storedItem);
  }, []);
  return (
    <div className="flex h-screen bg-[#f3f4f6] ">
      {isLoggedIn ? <SidebarMenu /> : ""}
      <div className="flex-1 flex flex-col overflow-hidden">
        {isLoggedIn ? <Navbar /> : ""}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f3f4f6] ">
          {isLoggedIn ? children : <LoginClient />}
        </main>
        <div className="flex justify-center items-center mb-5 bg-[#f3f4f6]">
          <div className="font-bold ">
            {isLoggedIn
              ? ` Copyright © Designed & Developed by Varsil Suvagiya `
              : ""}
          </div>
        </div>
      </div>
      <ToastContainer   />
    </div>
  );
};

export default withAuth({ WrappedComponent: LayoutClient, unprotected: false });
