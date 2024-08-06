"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

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
  bio: string | null;
  skills: string[] | null;
}

export default function User({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/user/${params.id}`);
        if (!response.ok) {
          throw new Error("Error fetching user");
        }
        const data: User = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="h-screen flex md:flex-row">
        <Sidebar />
        <div className="bg-[#242323] justify-center items-center p-4 pt-20 md:p-7 flex flex-col flex-1 text-white min-h-screen">
          <p className="flex justify-center items-center h-full text-white">
            <span className="loading loading-spinner loading-lg"></span>
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex md:flex-row">
        <Sidebar />
        <div className="bg-[#242323] flex flex-col flex-1 justify-center items-center p-4 pt-20 md:p-7 text-white">
          <p>User not found</p>
        </div>
      </div>
    );
  }

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal website showcasing projects and skills.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 2,
      title: "E-commerce Website",
      description:
        "An online store for selling products and managing inventory.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 3,
      title: "Blog Platform",
      description:
        "A platform for publishing articles, managing content, and engaging with readers.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 4,
      title: "Social Media App",
      description:
        "A social networking application for connecting with friends and sharing updates.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 5,
      title: "Task Management Tool",
      description:
        "A productivity tool for organizing tasks, setting deadlines, and tracking progress.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];

  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] p-4 pt-20 md:p-7 flex flex-col flex-1 text-white min-h-screen">
        {/* User Section */}
        <div className="w-full md:h-80 md:p-10 flex flex-col gap-5">
          <div className="flex flex-col md:flex-row items-center text-center md:text-start gap-3 md:gap-0">
            {/* Profile Image */}
            <div className="h-32 w-32 flex-shrink-0">
              {user.image ? (
                <Image
                  src={user.image}
                  className="rounded-full"
                  alt={`${user.username}'s avatar`}
                  height="128"
                  width="128"
                  priority
                />
              ) : (
                <div className="rounded-full bg-blue-500 h-full w-full text-white text-5xl leading-[128px] flex items-center justify-center">
                  <span className="text-white">
                    {user.name?.charAt(0).toUpperCase() ||
                      user.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="ml-4 gap-3 w-full">
              <p className="text-3xl">{user.name || "john doe"}</p>
              <h1 className="text-gray-400 text-md mb-2 font-semibold">
                @{user.username || "username"}
              </h1>
              <p className="text-md">{user.bio}</p>
            </div>

            <button className="btn btn-primary">Connect</button>
          </div>

          <div className="flex flex-col md:h-60 p-4">
            <p className="mb-2 text-center md:text-start">Skills:</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {user.skills?.map((skill, index) => (
                <p key={index} className="badge badge-primary">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="text-3xl md:mb-4 md:ml-4 text-center md:text-start">
          Projects
        </p>

        {/* Project Section */}
        <div className="max-h-screen p-4 overflow-y-auto project-scrollbar">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card bg-base-100 shadow-xl col-span-1 justify-self-center"
              >
                <figure>
                  <img src={project.imageUrl} alt={project.title} />
                </figure>
                <div className="card-body text-black">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Check Out</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
