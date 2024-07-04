"use client";

import Sidebar from "@/components/Sidebar";
import { useState, ChangeEvent } from "react";

interface Author {
  name: string;
  avatarUrl: string;
}

interface Project {
  id: number;
  date: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  author: Author;
}

const projects: Project[] = [
  {
    id: 1,
    date: "Jan 14, 2024",
    title: "MindSync: Neural Interface Project",
    description:
      "Join our team to develop MindSync, a groundbreaking neural interface project aiming to enhance cognitive interaction and immersive experiences. We are seeking Frontend Developers to collaborate with neuroscientists and engineers to pioneer the future of human-computer interfaces.",
    tags: ["React", "TypeScript", "Node.js"],
    role: "Frontend Developer",
    author: {
      name: "Alice Nguyen",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 2,
    date: "Jan 12, 2024",
    title: "EcoEats: Eco-Friendly Delivery Platform",
    description:
      "Join EcoEats to develop a sustainable eco-friendly delivery platform, promoting green consumer habits and integrating carbon footprint tracking. We are seeking Full Stack Developers to help revolutionize the food delivery industry with innovative green technology solutions.",
    tags: ["Vue", "Node.js", "Express.js"],
    role: "Full Stack Developer",
    author: {
      name: "Bob Smith",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 3,
    date: "Jan 11, 2024",
    title: "NeuroSpark: AI-powered Analytics Dashboard",
    description:
      "Build NeuroSpark, an AI-powered analytics dashboard to automate data insights and visualize predictive analytics for business intelligence. We are seeking Backend Developers to empower businesses with actionable insights and data-driven decision-making capabilities.",
    tags: ["Python", "Flask"],
    role: "Backend Developer",
    author: {
      name: "Elena Rodriguez",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 4,
    date: "Jan 10, 2024",
    title: "NomadNest: Remote Work Platform",
    description:
      "Develop NomadNest, a global remote work platform fostering collaboration and interactive workspaces. We are seeking Frontend Developers to connect remote workers worldwide and create a seamless virtual office environment.",
    tags: ["Angular", "Node.js"],
    role: "Frontend Developer",
    author: {
      name: "Michael Johnson",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 5,
    date: "Jan 9, 2024",
    title: "GenoQuest: Genetic Research App",
    description:
      "Create GenoQuest, a genetic research app exploring genomic data and developing tools for genomic analysis. We are seeking iOS Developers to contribute to advancements in genetic research and personalized medicine.",
    tags: ["Swift", "SwiftUI"],
    role: "iOS Developer",
    author: {
      name: "Sophie Brown",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 6,
    date: "Jan 8, 2024",
    title: "HealthHub: Personal Wellness Tracker",
    description:
      "Develop HealthHub, a personal wellness tracker app to monitor health metrics and track fitness goals. We are seeking Frontend Developers to empower users to achieve their health and wellness objectives with personalized insights and analytics.",
    tags: ["React", "Tailwind"],
    role: "Frontend Developer",
    author: {
      name: "Emma Thompson",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 7,
    date: "Jan 7, 2024",
    title: "CodeLink: Real-time Code Collaboration",
    description:
      "Build CodeLink, an online platform for real-time code collaboration and pair programming. We are seeking Full Stack Developers to enhance developer productivity and streamline software development processes with collaborative coding tools.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    role: "Full Stack Developer",
    author: {
      name: "Oliver Davis",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 8,
    date: "Jan 6, 2024",
    title: "StreamView: Live Video Streaming App",
    description:
      "Develop StreamView, a live video streaming app with interactive viewer engagement features. We are seeking Backend Developers to create dynamic and engaging live streaming experiences for users across different platforms.",
    tags: ["Node.js", "Express.js"],
    role: "Backend Developer",
    author: {
      name: "Liam Wilson",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 9,
    date: "Jan 5, 2024",
    title: "HealthHero: AI-driven Healthcare Companion",
    description:
      "Build HealthHero, an AI-driven healthcare companion app offering AI diagnostics and personalized health recommendations. We are seeking Full Stack Developers to empower users with proactive health monitoring and personalized wellness plans.",
    tags: ["React Native", "Node.js"],
    role: "Full Stack Developer",
    author: {
      name: "Sophia Clark",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTechnology, setSelectedTechnology] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const handleTechnologyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTech: string = e.target.value;
    setSelectedTechnology(selectedTech);
    filterProjects(selectedTech, searchQuery, selectedRole);
  };

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedRole: string = e.target.value;
    setSelectedRole(selectedRole);
    filterProjects(selectedTechnology, searchQuery, selectedRole);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query: string = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterProjects(selectedTechnology, query, selectedRole);
  };

  const handleResetFilters = () => {
    setSelectedTechnology("");
    setSelectedRole("");
    setSearchQuery("");
    setFilteredProjects(projects);
  };

  const filterProjects = (tech: string, query: string, role: string) => {
    const filtered: Project[] = projects.filter((project) => {
      const techMatch: boolean = tech ? project.tags.includes(tech) : true;
      const titleMatch: boolean = project.title.toLowerCase().includes(query);
      const descriptionMatch: boolean = project.description
        .toLowerCase()
        .includes(query);
      const tagMatch: boolean = project.tags.some((tag: string) =>
        tag.toLowerCase().includes(query)
      );
      const roleMatch: boolean = role ? project.role === role : true;

      return (
        techMatch && (titleMatch || descriptionMatch || tagMatch) && roleMatch
      );
    });
    setFilteredProjects(filtered);
  };

  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex flex-col flex-1 p-4 pt-20 md:p-7">
        <h1 className="text-white text-4xl p-4">Projects</h1>

        <div className="flex flex-col md:flex-row p-4 gap-3">
          <button className="btn btn-primary" onClick={handleResetFilters}>
            Reset Filters
          </button>
          <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden">
          <div className="col-span-1">
            <div className="p-4 h-full">
              <div className="flex flex-col gap-3">
                <label className="text-white mr-2">Filter by:</label>

                <select
                  className="select select-primary select-bordered text-white w-full md:max-w-xs bg-transparent"
                  value={selectedTechnology}
                  onChange={handleTechnologyChange}
                >
                  <option disabled value="">
                    Technologies
                  </option>
                  {[
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "Java",
                    "Swift",
                    "React",
                    "Tailwind",
                    "Vue",
                    "Angular",
                    "Node.js",
                    "Express.js",
                    "Django",
                    "Flask",
                  ].map((tech) => (
                    <option key={tech} className="text-black" value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>

                <select
                  className="select select-primary select-bordered text-white w-full md:max-w-xs bg-transparent"
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  <option disabled value="">
                    Role
                  </option>
                  {[
                    "UI/UX Designer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Full Stack Developer",
                    "Data Scientist",
                    "AI/ML Engineer",
                    "Game Developer",
                    "Mobile App Developer",
                    "DevOps Engineer",
                    "Project Manager",
                  ].map((role) => (
                    <option key={role} className="text-black" value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-span-4 overflow-y-auto project-scrollbar">
            <div className="flex flex-col gap-5 md:p-5">
              {filteredProjects.length > 0 ? (
                // Render filtered projects
                filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-[#2c2c2c] text-white rounded-box p-5 cursor-pointer"
                  >
                    <h1 className="text-white text-2xl font-bold">
                      {project.title}
                    </h1>

                    <div className="flex items-center gap-3 mt-3">
                      <img
                        src={project.author.avatarUrl}
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{project.author.name}</p>
                        <p className="text-gray-400 text-sm">{project.date}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mt-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge badge-neutral text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="btn btn-primary mt-3">Apply</button>
                  </div>
                ))
              ) : (
                // Display message if no projects match the filter criteria
                <p className="text-white">
                  No projects match the filter criteria.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
