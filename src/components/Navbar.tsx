import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around bg-gray-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link
        className="bg-black text-white py-2 px-4 rounded hover:opacity-75"
        href="/login"
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
