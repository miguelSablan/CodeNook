import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-between h-14 md:justify-around bg-gray-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <Link className="text-2xl font-bold ml-4" href="/">
        Code<span className="text-blue-700">Nook</span>
      </Link>

      <div className="mr-4">
        <Link className="py-2 mr-3 rounded hover:opacity-75" href="/login">
          Log in
        </Link>

        <Link
          className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:opacity-75"
          href="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
