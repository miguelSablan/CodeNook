import DashboardLayout from "@/components/DashboardLayout";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  const userImage =
    session?.user?.image !== "" ? session?.user?.image : undefined;
  const userName = session?.user?.name || session?.user.username || "";

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
    <DashboardLayout>
      <div className="bg-[#242323] p-7 flex flex-col flex-1 text-white min-h-screen overflow-auto">
        {/* User Section */}
        <div className="w-full h-80 p-10 flex flex-col gap-5">
          <div className="flex items-center">
            {/* Profile Image */}
            <div>
              {userImage ? (
                <Image
                  src={userImage}
                  className="rounded-full"
                  alt="avatar"
                  height="150"
                  width="150"
                  priority
                />
              ) : (
                <div className="rounded-full bg-blue-500 flex-shrink-0 h-36 w-36 text-white text-5xl leading-24 flex items-center justify-center">
                  <span className=" text-white">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="ml-4 gap-3 w-full">
              <h1 className="text-white text-3xl mb-2 font-semibold">
                {userName}
              </h1>

              <p className="text-md">Full-Stack Developer</p>
            </div>

            <button className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
                />
              </svg>
              Edit
            </button>
          </div>

          <div className="flex flex-col h-60 p-4">
            <p className="mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <p key={index} className="badge badge-primary">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="text-3xl mb-4 ml-4">Projects</p>

        {/* Project Section */}
        <div className="max-h-screen p-4 overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card w-96 bg-base-100 shadow-xl col-span-1 justify-self-center"
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
    </DashboardLayout>
  );
};

export default Profile;
