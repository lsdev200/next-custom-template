"use client";
import DropdownSelect from "@/app/components/formComponents/dropdownselect";
import React, { useState } from "react";

const Page = () => {
  const dropdownoption = [
    "Television",
    "Chair",
    "Smartphone",
    "Laptop",
    "Desk",
    "Sofa",
    "Table",
    "Headphones",
    "Refrigerator",
    "Microwave",
    "Washing Machine",
    "Toaster",
    "Blender",
    "Coffee Maker",
    "Vacuum Cleaner",
    "Dining Table",
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleDropdownChange = (selectedValue: string) => {
    setSelectedValue(selectedValue);
  };
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <DropdownSelect
        label="Select an option"
        options={dropdownoption}
        value={selectedValue}
        onChange={handleDropdownChange}
      />
    </div>
  );
};

export default Page;
