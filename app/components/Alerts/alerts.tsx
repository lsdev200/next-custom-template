"use client";

import React from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoMdWarning } from "react-icons/io";

interface AlertProps {
  type: "success" | "error" | "info" | "warning" | "primary" | "secondary";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertClasses = `p-4 mb-4 rounded-md ${
    type === "success"
      ? "bg-green-100 border-green-500 text-green-700"
      : type === "error"
      ? "bg-red-100 border-red-500 text-red-700"
      : type === "info"
      ? "bg-blue-100 border-blue-500 text-blue-700"
      : type === "warning"
      ? "bg-yellow-100 border-yellow-500 text-yellow-700"
      : type === "primary"
      ? "bg-indigo-100 border-indigo-500 text-indigo-700"
      : "bg-gray-100 border-gray-500 text-gray-700"
  } border-2 flex items-center`;

  const iconClasses = `h-6 w-6 mr-2 flex items-center justify-center text-xl ${
    type === "success"
      ? "text-green-500"
      : type === "error"
      ? "text-red-500"
      : type === "info"
      ? "text-blue-500"
      : type === "warning"
      ? "text-yellow-500"
      : type === "primary"
      ? "text-indigo-500"
      : "text-gray-500"
  }`;

  return (
    <div className={alertClasses}>
      <span className={iconClasses}>
        {type === "success" && <FaCheckCircle />}
        {type === "error" && <BiSolidErrorCircle />}
        {type === "info" && <BsInfoCircleFill />}
        {type === "warning" && <IoMdWarning />}
        {type === "primary" && <FaCheckCircle />}
        {type === "secondary" && <FaCheckCircle />}
      </span>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
