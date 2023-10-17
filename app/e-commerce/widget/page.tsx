import Widget1 from "@/app/components/widget/widget1";
import Widget2 from "@/app/components/widget/widget2";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center gap-2">
      <Widget1 />
      <div>
        <Widget2 />
      </div>
    </div>
  );
};

export default page;
