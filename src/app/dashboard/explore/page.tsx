"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
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

const Explore = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/allUsers");
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
      user.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex flex-col flex-1 p-4 md:p-7 text-white">
        <h1 className="text-white text-4xl p-4">Explore</h1>

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
          <p className="p-4 text-lg">Loading...</p>
        ) : (
          <div className="max-h-screen p-4 overflow-y-auto project-scrollbar">
            <div className="grid grid-cols-5 gap-8">
              {filteredUsers.map((user) => (
                <div
                  className="flex justify-between gap-3 items-center"
                  key={user.id}
                >
                  <div className="flex gap-3 bg-black border rounded-md p-3 justify-center items-center">
                    {user.name}
                    {user.image ? (
                      <Image
                        src={user.image}
                        className="rounded-full"
                        alt="avatar"
                        height="32"
                        width="32"
                        priority
                      />
                    ) : (
                      <div className="rounded-full bg-primary flex-shrink-0 h-8 w-8 text-white text-lg leading-24 flex items-center justify-center">
                        <span className="text-white">
                          {user.name?.charAt(0).toUpperCase() ||
                            user.email?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
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

export default Explore;
