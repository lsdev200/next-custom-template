"use client";

import Input from "@/app/components/formComponents/input";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <Input
        id="username"
        type="text"
        required={true}
        placeholder="  Enter your username"
        label="Username"
        register={register}
      />
    </div>
  );
};

export default Page;
