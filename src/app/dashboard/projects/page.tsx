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
    title: "E-commerce Website",
    description:
      "We are building an innovative e-commerce platform revolutionizing online shopping. We're seeking passionate React developers with expertise in Tailwind CSS and TypeScript to join our frontend team. Help us create a seamless user experience with advanced product search, filters, and a robust authentication system.",
    tags: ["React", "Tailwind", "TypeScript"],
    role: "Frontend Developer",
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
    role: "Backend Developer",
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
    role: "UI/UX Designer",
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
    role: "Game Developer",
    author: {
      name: "Username 4",
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
                    className="flex flex-col gap-6 bg-[#1d1d1d] text-white rounded-box p-6 max-w-auto"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                      <span className="text-sm">{project.date}</span>
                      <div className="flex gap-3">
                        {project.tags.map((tag, index) => (
                          <div key={index} className="badge badge-primary">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h1 className="text-2xl font-bold text-center md:text-start">
                        {project.title}
                      </h1>
                      <span className="text-center md:text-start">
                        {project.description}
                      </span>
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
