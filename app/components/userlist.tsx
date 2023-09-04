// components/UserList.tsx
"use client";
import Image from "next/image";
import React from "react";

interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-4 w-64 flex flex-col  items-center  "
          >
            <Image
              src={user.avatar}
              width={500}
              height={500}
              alt={user.name}
              className="w-28  object-cover rounded-full mb-2"
            />
            <hr
              style={{
                width: "80%",
                borderTop: "1px solid #ccc",
                marginTop: "3%",
              }}
            />
            <div className="mt-2 text-center">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
