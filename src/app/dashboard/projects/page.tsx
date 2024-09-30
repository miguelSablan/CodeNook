"use client";

import { ProjectCardSkeleton } from "@/components/ProjectCardSkeleton";
import Sidebar from "@/components/Sidebar";
import { useState, ChangeEvent, useEffect } from "react";

interface Author {
  name: string;
  image: string;
}

interface Project {
  id: number;
  createdAt: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  author: Author;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTechnology, setSelectedTechnology] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data: Project[] = await response.json();

        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
        <h1 className="text-white text-4xl p-4 font-bold">Projects</h1>

        <div className="flex flex-col md:flex-row p-4 gap-3">
          <button className="btn btn-primary" onClick={handleResetFilters}>
            Reset Filters
          </button>
          <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2">
            <input
              type="text"
              className="grow text-black"
              placeholder="Search by title or description"
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

          <select
            className="select select-primary select-bordered text-white bg-transparent"
            value={selectedTechnology}
            onChange={handleTechnologyChange}
          >
            <option disabled value="">
              Filter by Technologies
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
            className="select select-primary select-bordered text-white bg-transparent"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option disabled value="">
              Filter by Role
            </option>
            {[
              "UI/UX Designer",
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
              "AI/ML Engineer",
              "Game Developer",
              "Mobile App Developer",
              "iOS Developer",
            ].map((role) => (
              <option key={role} className="text-black" value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto project-scrollbar">
            {Array.from({ length: 9 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-white text-center py-10 flex items-center justify-center w-full">
            No projects found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto project-scrollbar">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#2c2c2c] text-white rounded-box p-5 cursor-pointer shadow-md flex flex-col border border-gray-900 hover:border-gray-400 transition"
              >
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

                <div className="flex items-center mb-2">
                  <img
                    src={project.author.image}
                    alt={project.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      {project.author.name}
                    </p>
                    <p className="text-sm text-gray-400">{project.createdAt}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-3">{project.description}</p>

                <div className="mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge badge-ghost text-sm mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn btn-primary mt-auto self-start">
                  Apply
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
