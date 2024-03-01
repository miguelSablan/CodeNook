import Sidebar from "@/components/Sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const DashboardLayout = async () => {
  const session = await getServerSession(authOptions);

  const userName = session?.user?.name || session?.user.username;

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="bg-gray-100 flex justify-center items-center flex-1 p-4 text-black border border-dashed min-h-screen overflow-auto">
        <h1 className="text-4xl text-center">Welcome, {userName}.</h1>
      </div>
    </div>
  );
};

export default DashboardLayout;
