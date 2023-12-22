"use client";

import Input from "../components/formComponents/input";
import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import withAuth from "../hooks/withAuth";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

const LoginClient: React.FC = () => {

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    toast("Login Successful");
    router.push("/");
    window.location.reload();
    
  };

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-20 w-auto"
            src="/assets/img/devonix.png"
            alt="Company Logo"
            height={1000}
            width={1000}
            style={{ mixBlendMode: "multiply" }}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 opacity-50">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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

            <div className="">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="  Enter your password"
                label="Password"
                register={register}
                
              />
          {/* <span
           className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
          >
          {showPassword ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>} 
        </span>
         */}
            </div>

            <div>
              <input
                type="submit"
                name="Sign in"
                className="flex cursor-pointer w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </div>
          </form>
          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              href="/Registration"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              &nbsp;Register Now
            </Link>
          </p> */}
        </div>
      </div>
    </>
  );
};


export default withAuth({ WrappedComponent: LoginClient, unprotected: true });
