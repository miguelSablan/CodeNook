import Navbar from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <main className="flex h-screen flex-col items-center justify-center p-24">
        <Navbar />
        <h1 className="text-4xl text-center">
          Welcome, {session?.user.username || session.user.name}.
        </h1>
      </main>
    );
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl">Please login to see this page</h1>
    </main>
  );
};

export default Dashboard;
