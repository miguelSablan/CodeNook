"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface User {
  id: string;
  username: string | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Error fetching users");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex flex-col flex-1 p-4 pt-20 md:p-7">
        <h1 className="text-white text-4xl p-4">Users</h1>

        <div className="flex p-4 gap-3">
          <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="grow text-black"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        {loading ? (
          <p className="flex justify-center items-center h-full text-white">
            <span className="loading loading-spinner loading-lg"></span>
          </p>
        ) : (
          <div className="max-h-screen p-4 overflow-y-auto project-scrollbar">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {filteredUsers.map((user) => (
                <div
                  className="col-span-1 flex justify-center items-center"
                  key={user.id}
                >
                  <Link
                    href={`/dashboard/users/${user.id}`}
                    className="h-56 w-52 flex flex-col justify-center items-center gap-3 bg-black rounded-lg p-3"
                  >
                    {user.image ? (
                      <Image
                        src={user.image}
                        className="rounded-full"
                        alt="avatar"
                        height="64"
                        width="64"
                        priority
                      />
                    ) : (
                      <div className="rounded-full bg-primary flex-shrink-0 h-16 w-16 text-white text-4xl leading-24 flex items-center justify-center">
                        <span className="text-white">
                          {user.name?.charAt(0).toUpperCase() ||
                            user.email?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="text-center flex flex-col gap-1">
                      <div className="leading-3 font-bold text-gray-300">
                        {user.name}
                      </div>
                      <div className="flex-wrap text-gray-400">
                        @{user.username || "username"}
                      </div>
                    </div>
                    <button className="btn btn-primary">Connect</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
