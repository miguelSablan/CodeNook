import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      title: "E-commerce Website",
      description:
        "Build an online store where users can browse products, add them to cart, and checkout. Use React for frontend components and Tailwind CSS for styling. Implement features like product search, filters, and a user authentication system.",
      tags: ["React", "Tailwind", "TypeScript"],
    },
    {
      id: 2,
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      title: "Image Processing App",
      description:
        "Create a tool for image processing and manipulation using Python and OpenCV. Include features like image filters, object detection, and image enhancement. Allow users to upload images, apply filters, and download the processed images.",
      tags: ["Python", "openCV"],
    },
    {
      id: 3,
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      title: "Social Media Dashboard",
      description:
        "Develop a dashboard application for managing social media accounts. Integrate APIs for platforms like Twitter, Facebook, and Instagram to fetch data. Display analytics, post scheduling, and engagement metrics for each social media account.",
      tags: ["React"],
    },
    {
      id: 4,
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      title: "3D Game",
      description:
        "Design and develop a 3D game using Unity game engine. Create game mechanics, levels, and interactive elements. Include features like player progression, scoring system, and in-game rewards.",
      tags: ["Unity"],
    },
  ];

  return (
    <DashboardLayout>
      <div className="bg-[#242323] flex flex-col flex-1 p-7 min-h-screen">
        <h1 className="text-white text-4xl p-4">Projects</h1>

        <div className="flex p-4 gap-3">
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

          <label className="input input-bordered flex items-center gap-2 w-1/2">
            <input
              type="text"
              className="grow text-black"
              placeholder="Search"
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
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="card lg:card-side bg-base-100 shadow-xl text-black"
                >
                  <figure>
                    <img src={project.imgUrl} alt={project.title} />
                  </figure>
                  <div className="card-body md:w-1/2">
                    <h2 className="card-title">{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="flex justify-start flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <p
                          key={index}
                          className="badge badge-primary max-w-max"
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Interested</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <div className="p-4 h-full">
              <h1 className="text-white">Placeholder</h1>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
