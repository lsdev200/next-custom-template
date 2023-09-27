"use client";
import FileUpload from "@/app/components/formComponents/fileupload";
import React from "react";

const page = () => {
  const filetypes = ["image/*"];
  const filsize = 10000000000000000000;
  const onUpload = () => {};
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <FileUpload
        allowedFileTypes={filetypes}
        onUpload={onUpload}
        maxFileSize={filsize}
      />
    </div>
  );
};

export default page;
