"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faNewspaper,
  faUser,
  faUsers,
  faHouse,
  faSuitcase,
  faMagnifyingGlass,
  faGear,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";

const navLinks = [
  { id: 1, href: "/projects", label: "Projects", icon: faUsers },
  { id: 2, href: "/jobs", label: "Jobs", icon: faBriefcase },
  { id: 3, href: "/news", label: "News", icon: faNewspaper },
  { id: 4, href: "/profile", label: "Profile", icon: faUser },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#1d1d1d] text-white flex justify-between items-center p-4 z-10">
        <label className="btn btn-circle border-none swap swap-rotate max-w-max">
          <input
            type="checkbox"
            checked={isOpen}
            onChange={handleSidebarToggle}
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        <div className="text-2xl">
          Code<span className="text-blue-600">Nook</span>
        </div>

        <button>
          <FontAwesomeIcon icon={faGear} width={24} height={24} />
        </button>
      </div>

      {/* Horizontal Navbar for Mobile */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-[#1d1d1d] text-white flex flex-col items-start z-10">
          <ul className="menu w-full p-4">
            <li>
              <Link
                href="/home"
                className={pathname === "/home" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon icon={faHouse} width={24} height={24} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={pathname === "/projects" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon icon={faUsers} width={24} height={24} />
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/jobs"
                className={pathname === "/jobs" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon icon={faSuitcase} width={24} height={24} />
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className={pathname === "/news" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon icon={faNewspaper} width={24} height={24} />
                News
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className={pathname === "/explore" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  width={24}
                  height={24}
                />
                Explore
              </Link>
            </li>
          </ul>
          <div className="flex justify-between items-center p-2 bg-black w-full">
            <a className="btn btn-ghost" href="/profile">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                className="w-8 rounded-full"
              />

              <div className="flex flex-col text-start">
                <span className="font-bold text-white">User name</span>
                <span className="text-sm text-accent">user@email.com</span>
              </div>
            </a>
            <SignOutButton />
          </div>
        </div>
      )}

      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex h-screen sticky top-0 flex-col bg-[#1d1d1d] text-white overflow-y-auto">
        {/* <!-- Header --> */}
        <div className="flex justify-between p-2">
          {/* <!-- Logo --> */}
          <a className="btn btn-ghost text-2xl">
            <div className="">
              Code<span className="text-blue-600">Nook</span>
            </div>
          </a>

          <a className="btn btn-ghost btn-circle text-lg">
            <FontAwesomeIcon icon={faGear} width={24} height={24} />
          </a>
        </div>

        {/* <!-- Body --> */}
        <div className="flex flex-col px-6 pt-4 grow">
          {/* <!-- Links --> */}
          <div className="flex flex-col divide-y divide-base-300">
            <ul className="menu px-0 py-4">
              <li>
                <a
                  className={pathname === "/home" ? "active" : ""}
                  href="/home"
                >
                  <FontAwesomeIcon icon={faHouse} width={24} height={24} />
                  Home
                </a>
              </li>
              <li>
                <a
                  className={pathname === "/projects" ? "active" : ""}
                  href="/projects"
                >
                  <FontAwesomeIcon icon={faUsers} width={24} height={24} />
                  Projects
                </a>
              </li>
              <li>
                <a
                  className={pathname === "/jobs" ? "active" : ""}
                  href="/jobs"
                >
                  <FontAwesomeIcon icon={faSuitcase} width={24} height={24} />
                  Jobs
                </a>
              </li>
              <li>
                <a
                  className={pathname === "/news" ? "active" : ""}
                  href="/news"
                >
                  <FontAwesomeIcon icon={faNewspaper} width={24} height={24} />
                  News
                </a>
              </li>
              <li>
                <a
                  className={pathname === "/explore" ? "active" : ""}
                  href="/explore"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    width={24}
                    height={24}
                  />
                  Explore
                </a>
              </li>
            </ul>

            <ul className="menu px-0 py-4">
              <li>
                <a className={pathname === "/github" ? "active-link" : ""}>
                  <FontAwesomeIcon icon={faUsers} width={24} height={24} />
                  GitHub
                </a>
              </li>
              <li>
                <a className={pathname === "/facebook" ? "active-link" : ""}>
                  <FontAwesomeIcon icon={faUsers} width={24} height={24} />
                  Facebook
                </a>
              </li>
              <li>
                <a className={pathname === "/help" ? "active-link" : ""}>
                  <FontAwesomeIcon icon={faInfoCircle} width={24} height={24} />
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className="flex justify-between items-center p-2 bg-black">
          <a className="btn btn-ghost" href="/profile">
            <img
              alt="Profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-8 rounded-full"
            />

            <div className="flex flex-col text-start">
              <span className="font-bold text-white">User name</span>
              <span className="text-sm text-accent">user@email.com</span>
            </div>
          </a>
          <SignOutButton />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
