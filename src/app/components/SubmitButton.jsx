"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="py-1 px-2 bg-indigo-500 text-white font-semibold disabled:bg-gray-500"
      type="submit"
      disabled={pending}
    >
      {pending ? "Creating user..." : "Create"}
    </button>
  );
};

export default SubmitButton;
