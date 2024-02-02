import React from "react";
import { deleteUser } from "@/serverActions/userActions";
import SubmitDeleteButton from "./SubmitDeleteButton";

const DeleteButton = ({ user }) => {
  return (
    <form>
      <button
        formAction={async () => {
          "use server";
          await deleteUser(user);
        }}
      >
        <SubmitDeleteButton />
      </button>
    </form>
  );
};

export default DeleteButton;
