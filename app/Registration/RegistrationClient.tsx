"use client";

import React from "react";
import Input from "../components/formComponents/input";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegistrationClient: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      mno: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    router.push("/Login");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="/assets/img/devonix.png"
            alt="Company Logo"
            height={1000}
            width={1000}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                id="name"
                type="text"
                required
                placeholder="  Enter your name"
                label="Name"
                register={register}
              />
            </div>
            <div>
              <Input
                id="email"
                type="text"
                required
                placeholder="  Enter your email"
                label="Email"
                register={register}
              />
            </div>

            <div>
              <Input
                id="passoword"
                type="password"
                required
                placeholder="  Enter your password"
                label="Password"
                register={register}
              />
            </div>
            <div>
              <Input
                id="mno"
                type="number"
                required
                placeholder="  Enter your mobile number"
                label="Mobile Number"
                register={register}
              />
            </div>
            <div>
              <input
                type="submit"
                name="Sign up"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-16 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <Link
              href="/Login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              &nbsp;Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegistrationClient;
