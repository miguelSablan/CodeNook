import Sidebar from "@/components/Sidebar";

const Chats = () => {
  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex justify-center items-center flex-1 p-4 text-white min-h-screen overflow-auto">
        Chats
      </div>
    </div>
  );
};

export default Chats;
