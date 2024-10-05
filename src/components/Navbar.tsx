"use client";

import Link from "next/link";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Avatar from "./Avatar";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between h-14 md:justify-around bg-[#1d1d1d] py-2 fixed w-full z-10 top-0 transition-all ${
        hasScrolled ? "border-b border-s-zinc-200" : ""
      }`}
    >
      <Link className="btn btn-ghost text-2xl font-bold" href="/">
        <FontAwesomeIcon icon={faCodeBranch} />
        <div>
          <span className="text-blue-600">Code</span>Nook
        </div>
      </Link>

      <div>
        {session ? (
          <Link className="btn btn-ghost" href="/dashboard/projects">
            <div className="flex gap-3 items-center">
              Dashboard
              <Avatar />
            </div>
          </Link>
        ) : (
          <>
            <Link className="py-2 mr-3 rounded hover:opacity-75" href="/login">
              Log in
            </Link>
            <Link
              className="rounded-full border border-black bg-primary px-4 py-1.5 text-sm text-white transition-all hover:opacity-75"
              href="/signup"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
