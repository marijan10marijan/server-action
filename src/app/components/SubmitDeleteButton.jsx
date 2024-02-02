"use client";
import { Trash2, CircleDashed } from "lucide-react";
import { useFormStatus } from "react-dom";

import React from "react";

const SubmitDeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <CircleDashed className="text-indigo-500" />
      ) : (
        <Trash2 className="text-red-500" />
      )}
    </>
  );
};

export default SubmitDeleteButton;
