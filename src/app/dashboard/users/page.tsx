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
        <h1 className="text-white text-4xl p-4 font-bold">Users</h1>

        <div className="flex p-4 gap-3">
          <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search Users"
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {filteredUsers.map((user) => (
                <div
                  className="col-span-1 flex justify-center items-center"
                  key={user.id}
                >
                  <div className="drop-shadow-sm min-w-64 min-h-80">
                    <div className="flex flex-col items-center gap-4 rounded-t-3xl bg-gradient-to-r from-blue-200/50 to-blue-300/50 dark:from-blue-600/50 dark:to-blue-800/50 py-8 w-full">
                      <Link href={`/dashboard/users/${user.id}`}>
                        {user.image ? (
                          <Image
                            src={user.image}
                            className="rounded-full"
                            alt="avatar"
                            height="96"
                            width="96"
                            priority
                          />
                        ) : (
                          <div className="rounded-full bg-primary flex-shrink-0 h-24 w-24 text-white text-5xl leading-24 flex items-center justify-center">
                            <span className="text-white">
                              {user.name?.charAt(0).toUpperCase() ||
                                user.email?.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </Link>

                      <button className="btn btn-primary">Connect</button>
                    </div>

                    <div className="flex flex-col items-center rounded-b-3xl bg-[#2c2c2c] text-white py-8 w-full">
                      <h2 className="px-2 text-2xl font-semibold">
                        <Link href={`/dashboard/users/${user.id}`}>
                          {user.name}
                        </Link>
                      </h2>
                      <p className="mb-4 px-2 text-gray-400">
                        @{user.username || "username"}
                      </p>
                    </div>
                  </div>
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
