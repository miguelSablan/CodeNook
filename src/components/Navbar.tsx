import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignOutButton from "./SignOutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-around bg-gray-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <Link href="/">
        <h1>Home</h1>
      </Link>
      {session?.user ? (
        <SignOutButton />
      ) : (
        <Link
          className="bg-black text-white py-2 px-4 rounded hover:opacity-75"
          href="/login"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
