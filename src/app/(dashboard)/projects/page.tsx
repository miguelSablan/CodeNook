"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const projects = [
  {
    id: 1,
    date: "Jan 14, 2024",
    title: "E-commerce Website",
    description:
      "We are building an innovative e-commerce platform revolutionizing online shopping. We're seeking passionate React developers with expertise in Tailwind CSS and TypeScript to join our frontend team. Help us create a seamless user experience with advanced product search, filters, and a robust authentication system.",
    tags: ["React", "Tailwind", "TypeScript"],
    author: {
      name: "Username",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 2,
    date: "Jan 12, 2024",
    title: "Image Processing App",
    description:
      "Join us in developing a cutting-edge image processing app powered by Python and OpenCV. We're looking for skilled Python developers with experience in openCV to enhance our image manipulation features, including filters, object detection, and image enhancement. Collaborate with us to create a powerful tool for image professionals and enthusiasts.",
    tags: ["Python", "openCV"],
    author: {
      name: "Username 2",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 3,
    date: "Jan 11, 2024",
    title: "Social Media Dashboard",
    description:
      "Join our team as a UI/UX designer to develop a dashboard application for managing social media accounts. Integrate APIs for platforms like Twitter, Facebook, and Instagram to fetch data. Display analytics, post scheduling, and engagement metrics for each social media account.",
    tags: ["UI/UX", "React"],
    author: {
      name: "Username 3",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 4,
    date: "Jan 10, 2024",
    title: "3D Game",
    description:
      "Join our team of game developers to create an immersive 3D gaming experience using Unity. We're seeking Unity experts to design game mechanics, levels, and interactive elements. Contribute to player progression, scoring systems, and in-game rewards to delight gamers worldwide.",
    tags: ["Unity"],
    author: {
      name: "Username 4",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (e: any) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = projects.filter((project) => {
      const titleMatch = project.title.toLowerCase().includes(query);
      const descriptionMatch = project.description
        .toLowerCase()
        .includes(query);
      const tagMatch = project.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );
      return titleMatch || descriptionMatch || tagMatch;
    });
    setFilteredProjects(filtered);
  };

  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex flex-col flex-1 p-7 min-h-screen">
        <h1 className="text-white text-4xl p-4">Projects</h1>

        <div className="flex p-4 gap-3">
          <label className="input input-bordered flex items-center gap-2 w-1/2">
            <input
              type="text"
              className="grow text-black"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
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

          <button className="btn btn-primary">Search</button>
        </div>

        <div className="grid grid-cols-3 overflow-hidden">
          <div className="col-span-2 overflow-y-auto project-scrollbar">
            <div className="flex flex-col gap-5 p-5">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col gap-6 bg-[#1d1d1d] text-white rounded-box p-6 max-w-auto"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{project.date}</span>
                    <div className="flex gap-3">
                      {project.tags.map((tag, index) => (
                        <div key={index} className="btn btn-sm btn-primary">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <span>{project.description}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="btn btn-primary">Apply</button>
                    <div className="btn btn-ghost">
                      <img
                        src={project.author.avatarUrl}
                        alt="Avatar"
                        className="w-8 rounded-full"
                      />
                      {project.author.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <div className="p-4 h-full">
              <div className="flex items-center">
                <label className="text-white mr-2">Filter by:</label>
                <select className="select select-bordered text-black">
                  <option>All Categories</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>UI/UX</option>
                  <option>AI</option>
                  <option>VR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
