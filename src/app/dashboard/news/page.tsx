import Sidebar from "@/components/Sidebar";

const News = () => {
  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex justify-center items-center flex-1 p-4 text-white min-h-screen overflow-auto">
        News
      </div>
    </div>
  );
};

export default News;
