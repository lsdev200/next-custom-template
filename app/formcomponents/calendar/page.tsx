"use client";
import React from "react";
import DatePicker from "@/app/components/formComponents/calendar";

const page = () => {
  const onDateChange = () => {};
  const date = new Date();
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <DatePicker onDateChange={onDateChange} selectedDate={date} />
    </div>
  );
};

export default page;
