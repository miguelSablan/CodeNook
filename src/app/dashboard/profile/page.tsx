"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import EditProfileModal from "@/components/EditProfileModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { data: user } = useSession();

  if (!user) {
    return (
      <div className="h-screen flex md:flex-row">
        <Sidebar />
        <div className="bg-[#242323] p-4 pt-20 md:p-7 flex flex-col flex-1 text-white min-h-screen">
          <h1 className="font-bold text-white text-center">Loading...</h1>
        </div>
      </div>
    );
  }

  const name = user.user.name || "john doe";
  const userName = user.user.username || "username";
  const userEmail = user.user.email || "";
  const userImage = user.user.image !== "" ? user.user.image : undefined;
  const bio = "Full-Stack Developer";
  const skills = ["Java", "Python", "HTML", "CSS", "JavaScript", "React.js"];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal website showcasing projects and skills.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: 2,
      title: "E-commerce Website",
      description:
        "An online store for selling products and managing inventory.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: 3,
      title: "Blog Platform",
      description:
        "A platform for publishing articles, managing content, and engaging with readers.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: 4,
      title: "Social Media App",
      description:
        "A social networking application for connecting with friends and sharing updates.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: 5,
      title: "Task Management Tool",
      description:
        "A productivity tool for organizing tasks, setting deadlines, and tracking progress.",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
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
              {userImage ? (
                <Image
                  src={userImage}
                  className="rounded-full"
                  alt={`${userName}'s avatar`}
                  height="128"
                  width="128"
                  priority
                />
              ) : (
                <div className="rounded-full bg-blue-500 h-full w-full text-white text-5xl leading-[128px] flex items-center justify-center">
                  <span className="text-white">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="ml-4 gap-3 w-full">
              <p className="text-3xl">{name}</p>

              <h1 className="text-gray-400 text-md mb-2 font-semibold">
                @{userName}
              </h1>

              <p className="text-md">{bio}</p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                if (document) {
                  (
                    document.getElementById("my_modal_1") as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              <FontAwesomeIcon icon={faEdit} color="white" />
              Edit Profile
            </button>
          </div>

          <div className="flex flex-col md:h-60 p-4">
            <p className="mb-2 text-center md:text-start">Skills:</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill, index) => (
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
                className="card md:w-96 bg-base-100 shadow-xl col-span-1 justify-self-center"
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
      <EditProfileModal
        userFullName={name}
        userName={userName}
        userEmail={userEmail}
        userImage={userImage || ""}
        userBio={bio}
      />
    </div>
  );
};

export default Profile;
