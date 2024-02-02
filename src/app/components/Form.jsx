"use client";
import React, { useRef } from "react";
import SubmitButton from "./SubmitButton";
import { createUser } from "@/serverActions/userActions";
import { useFormState } from "react-dom";

const Form = () => {
  const formRef = useRef(null);
  const initialMessage = {
    message: "",
    success: false,
  };

  const [state, formAction] = useFormState(createUser, initialMessage);

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-4 mb-10"
      action={async (formData) => {
        await formAction(formData);
        formRef?.current?.reset();
      }}
    >
      <div className="w-full flex gap-4 items-center">
        <label htmlFor="name">
          Name: <span className="font-bold text-sm">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="your name..."
          required
          className="border border-gray-500 rounded-md py-1 px-2"
        />
      </div>
      <div className="w-full flex gap-4 items-center">
        <label htmlFor="email">
          Email: <span className="font-bold text-sm">*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="your email..."
          required
          className="border border-gray-500 rounded-md py-1 px-2"
        />
      </div>
      <div className="w-full flex gap-4 items-center">
        <label htmlFor="age">
          Age: <span className="font-bold text-sm">*</span>
        </label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="your age..."
          required
          className="border border-gray-500 rounded-md py-1 px-2"
        />
      </div>
      <div className="w-full flex gap-4 items-center">
        <label htmlFor="text">
          Text message: <span className="font-bold text-sm">*</span>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="your text..."
          required
          className="border border-gray-500 rounded-md py-1 px-2"
        />
      </div>
      <SubmitButton />
      {state.success ? (
        <p className="text-green-500 text-sm font-semibold mt-1 text-center">
          {state.message}{" "}
        </p>
      ) : (
        <p className="text-red-500 text-sm font-semibold mt-1 text-center">
          {state.message}
        </p>
      )}
    </form>
  );
};

export default Form;
