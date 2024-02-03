import Navbar from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBriefcase,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  const navLinks = [
    { href: "/dashboard", label: "Home", icon: faHouse },
    { href: "/jobs", label: "Jobs", icon: faBriefcase },
    { href: "/news", label: "News", icon: faNewspaper },
    { href: "/profile", label: "Profile", icon: faUser },
  ];

  if (session?.user) {
    const userName = session?.user?.name || session?.user.username;

    return (
      <div className="grid grid-cols-1 md:grid-cols-6">
        {/* Side Menu */}
        <div className="flex flex-col justify-between text-white bg-gray-800 p-4 z-10 sticky top-0 left-0 lg:col-span-1 md:border-white md:border-r-2 md:h-screen">
          <div className="w-full p-4">
            <div className="mt-9 text-center">
              <Link href={"/dashboard"} className="text-4xl font-bold">
                CodeNook
              </Link>
            </div>

            <nav className="flex flex-col gap-4 mt-28">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex gap-6 items-center rounded-2xl uppercase text-2xl font-medium p-3 transition duration-200 ease-in-out transform hover:bg-white hover:text-gray-800"
                >
                  <FontAwesomeIcon icon={link.icon} width={30} />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-4">
            <SignOutButton />
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="flex flex-col h-screen justify-center items-center text-center overflow-auto">
            <div className="p-4">
              <h1 className="text-4xl text-center">Welcome, {userName}.</h1>
            </div>
          </div>
        </div>
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

export default Dashboard;
