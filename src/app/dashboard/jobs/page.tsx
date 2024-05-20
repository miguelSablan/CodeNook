import Sidebar from "@/components/Sidebar";

const Jobs = () => {
  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex justify-center items-center flex-1 p-4 text-white min-h-screen overflow-auto">
        Jobs
      </div>
    </div>
  );
};

export default Jobs;
