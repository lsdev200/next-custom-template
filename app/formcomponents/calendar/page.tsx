"use client";
import React from "react";
import DatePicker from "@/app/components/formComponents/calendar";

const page = () => {
  const onDateChange = () => {};
  const selecteddate = new Date();
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <DatePicker onDateChange={onDateChange} selectedDate={selecteddate} />
    </div>
  );
};

export default page;
