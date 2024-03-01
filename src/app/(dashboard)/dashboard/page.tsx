import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import DashboardLayout from "@/components/DashboardLayout";
import Navbar from "@/components/Navbar";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return <DashboardLayout />;
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Navbar />
      <h1 className="text-4xl">Please login to see this page</h1>
    </main>
  );
};

export default Dashboard;
