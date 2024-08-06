"use client";

import Sidebar from "@/components/Sidebar";
import EditListingModal from "@/components/EditListingModal";
import ViewApplicantsModal from "@/components/ViewApplicantsModal";
import CreateListingModal from "@/components/CreateListingModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const myListings = [
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
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    applicants: [
      {
        id: 1,
        name: "John Doe",
        profilePic:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        id: 2,
        name: "Jane Smith",
        profilePic:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
    ],
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
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  },
];

const myApplications = [
  {
    id: 1,
    date: "Jan 15, 2024",
    title: "Project Alpha: AI Research Initiative",
    description:
      "Contribute to Project Alpha, focusing on cutting-edge AI research and development. We are looking for Research Scientists to advance our AI capabilities.",
    tags: ["Python", "TensorFlow", "AI"],
    role: "Research Scientist",
    author: {
      name: "Eve Carter",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  },
  {
    id: 2,
    date: "Jan 13, 2024",
    title: "TechVentures: Startup Incubator Program",
    description:
      "Join TechVentures to participate in our startup incubator program, supporting innovative startups with cutting-edge technologies. We need Business Analysts and Product Managers.",
    tags: ["JavaScript", "Startup", "Product Management"],
    role: "Product Manager",
    author: {
      name: "Frank Miller",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  },
];

const Applications = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleEdit = (project: any) => {
    setSelectedProject(project);
    const modal = document.getElementById(
      "edit_listing_modal"
    ) as HTMLFormElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleViewApplicants = (project: any) => {
    setSelectedProject(project);
    const modal = document.getElementById(
      "view_applicants_modal"
    ) as HTMLFormElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleCreate = () => {
    const modal = document.getElementById(
      "create_listing_modal"
    ) as HTMLFormElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="min-h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex flex-1 flex-col p-4 pt-20 md:p-7 min-h-screen text-white">
        <h1 className="text-4xl p-4 font-bold">Applications</h1>

        <div className="flex flex-col flex-1 p-4">
          {/* Tabs Section */}
          <div className="overflow-x-auto">
            <div role="tablist" className="tabs tabs-bordered">
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab whitespace-nowrap"
                aria-label="My Listings"
                defaultChecked
              />

              <div role="tabpanel" className="tab-content">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto">
                  {myListings.map((project) => (
                    <div
                      key={project.id}
                      className="bg-[#2c2c2c] text-white rounded-box p-5 flex flex-col border border-gray-900 hover:border-gray-400 transition"
                    >
                      <h2 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h2>

                      <div className="flex items-center mb-2">
                        <img
                          src={project.author.avatarUrl}
                          alt={project.author.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {project.author.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            {project.date}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-3">
                        {project.description}
                      </p>

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
                      <div className="flex-grow"></div>

                      <div className="mt-4 flex">
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleViewApplicants(project)}
                        >
                          View Applicants
                        </button>
                        <button
                          className="btn btn-primary ml-2"
                          onClick={() => handleEdit(project)}
                        >
                          Edit Post
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab whitespace-nowrap"
                aria-label="My Applications"
              />

              <div role="tabpanel" className="tab-content">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto project-scrollbar">
                  {myApplications.map((project) => (
                    <div
                      key={project.id}
                      className="bg-[#2c2c2c] text-white rounded-box p-5 cursor-pointer shadow-md flex flex-col border border-gray-900 hover:border-gray-400 transition"
                    >
                      <h2 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h2>

                      <div className="flex items-center mb-2">
                        <img
                          src={project.author.avatarUrl}
                          alt={project.author.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {project.author.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            {project.date}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-3">
                        {project.description}
                      </p>

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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditListingModal project={selectedProject} />
      <ViewApplicantsModal applicants={selectedProject?.applicants || []} />
      <CreateListingModal />
      <div className="fixed bottom-8 right-8">
        <button className="btn btn-primary" onClick={() => handleCreate()}>
          <FontAwesomeIcon icon={faPlus} color="white" />
          Create Listing
        </button>
      </div>
    </div>
  );
};

export default Applications;
