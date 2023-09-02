"use client";

import Image from "next/image";
import React from "react";

const UserProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-64">
      <div className="text-center">
        <Image
          src="/assets/img/dummy.jpeg"
          width={100}
          height={100}
          alt="User Avatar"
          className=" m-auto rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-gray-600">Frontend Developer</p>
      </div>
      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full">
          Edit Profile
        </button>
        <a
          href="/user-settings"
          className="block text-gray-600 mt-4 hover:underline text-center"
        >
          Manage Settings
        </a>
      </div>
    </div>
  );
};

export default UserProfileCard;
