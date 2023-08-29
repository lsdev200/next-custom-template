import React, { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface DynamicInputProps {
  id: string;
  type: string;
  required: boolean;
  placeholder: string;
  label: string;
  register: UseFormRegister<FieldValues>
}

const Input: FC<DynamicInputProps> = ({
  id,
  type,
  required,
  placeholder,
  label,
  register,
}) => {
  return (
    <div>
      <div className="mt-2">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          {...register(id)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
