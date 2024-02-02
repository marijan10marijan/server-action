import React from "react";
import Users from "../components/Users";
import Form from "../components/Form";

const Action = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col gap-4 items-center justify-center my-10">
      <Form />
      <Users />
    </div>
  );
};

export default Action;
