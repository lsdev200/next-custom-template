import CountdownTimer from "@/app/components/countdown";
import React from "react";

const page = () => {
    
  // ** countdown
  const targetDate = new Date("2023-12-31T23:59:59");
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <div className="container mx-auto p-4">
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
};

export default page;
