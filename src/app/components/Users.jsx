import React from "react";
import { getUsers } from "../fetch/getUsers";
import DeleteButton from "./DeleteButton";

const Users = async () => {
  const users = await getUsers();

  return (
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-4">
      {users.reverse().map((user) => (
        <div
          key={user.id}
          className="p-2 rounded-md border border-gray-500 flex items-center gap-2 flex-wrap"
        >
          <div className="flex-grow">
            <p className="text-sm">{user.name}</p>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user.age}</p>
            <p className="text-sm">{user.text}</p>
          </div>
          <div>
            <DeleteButton user={user} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
