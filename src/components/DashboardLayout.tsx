import Sidebar from "@/components/Sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Navbar from "@/components/Navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  const userName = session?.user?.name || session?.user.username;

  if (session?.user) {
    return (
      <div className="h-screen flex md:flex-row">
        <Sidebar />
        {children}
      </div>
    );
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Navbar />
      <h1 className="text-4xl">Please login to see this page</h1>
    </main>
  );
};

export default DashboardLayout;
