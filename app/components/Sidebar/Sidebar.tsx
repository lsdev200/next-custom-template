"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSolidDashboard } from "react-icons/bi";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#ffffff] text-white flex-shrink-0 border-r-2 border-[#d9d9d9] ">
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
        <Link
          href="/dashboard"
          className="flex items-center py-2 px-4 hover:bg-[#ebedef] text-[#7d8893] hover:text-black "
        >
          <BiSolidDashboard className="mr-2 text-xl" />
          Dashboard
        </Link>
        <hr />
      </nav>
    </aside>
  );
};

export default Sidebar;
