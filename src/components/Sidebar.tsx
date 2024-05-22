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
  faInfoCircle,
  faBell,
  faComments,
  faList,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";
import User from "./User";

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
        <label className="btn btn-circle border-none swap swap-rotate">
          <input
            type="checkbox"
            checked={isOpen}
            onChange={handleSidebarToggle}
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        <Link className="btn btn-ghost text-3xl" href="/">
          <FontAwesomeIcon icon={faCodeBranch} />
          <div>
            <span className="text-blue-600">Code</span>Nook
          </div>
        </Link>

        <div className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-sm badge-primary indicator-item"></span>
          </div>
        </div>
      </div>

      {/* Horizontal Navbar for Mobile */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-[#1d1d1d] text-white flex flex-col items-start z-10">
          <ul className="menu w-full p-4">
            <li>
              <Link
                href="/dashboard/home"
                className={pathname === "/dashboard/home" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon icon={faHouse} width={24} height={24} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/projects"
                className={pathname === "/dashboard/projects" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon icon={faUsers} width={24} height={24} />
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/news"
                className={pathname === "/dashboard/news" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon icon={faNewspaper} width={24} height={24} />
                News
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/users"
                className={pathname === "/dashboard/users" ? "active" : ""}
                onClick={handleSidebarToggle}
              >
                <FontAwesomeIcon icon={faUser} width={24} height={24} />
                People
              </Link>
            </li>
          </ul>

          <div className="flex justify-between items-center p-2 bg-black w-full">
            <User />
            <SignOutButton />
          </div>
        </div>
      )}

      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex h-screen sticky top-0 flex-col bg-[#1d1d1d] text-white overflow-y-auto">
        {/* <!-- Header --> */}
        <div className="flex justify-between p-2">
          {/* <!-- Logo --> */}
          <Link className="btn btn-ghost text-2xl" href="/">
            <FontAwesomeIcon icon={faCodeBranch} />
            <div>
              <span className="text-blue-600">Code</span>Nook
            </div>
          </Link>

          <div className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </div>
        </div>

        {/* <!-- Body --> */}
        <div className="flex flex-col px-6 pt-4 grow">
          {/* <!-- Links --> */}
          <div className="flex flex-col divide-y divide-base-300">
            <ul className="menu px-0 py-4">
              <li>
                <Link
                  href="/dashboard/home"
                  className={pathname === "/dashboard/home" ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faHouse} width={24} height={24} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/projects"
                  className={pathname === "/dashboard/projects" ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faUsers} width={24} height={24} />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/news"
                  className={pathname === "/dashboard/news" ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faNewspaper} width={24} height={24} />
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/users"
                  className={pathname === "/dashboard/users" ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faUser} width={24} height={24} />
                  People
                </Link>
              </li>
            </ul>

            <ul className="menu px-0 py-4">
              <li>
                <Link
                  className={pathname === "/dashboard/posts" ? "active" : ""}
                  href="/dashboard/posts"
                >
                  <FontAwesomeIcon icon={faList} width={24} height={24} />
                  My Posts
                </Link>
              </li>
              <li>
                <Link
                  className={pathname === "/dashboard/chats" ? "active" : ""}
                  href="/dashboard/chats"
                >
                  <FontAwesomeIcon icon={faComments} width={24} height={24} />
                  Chats
                </Link>
              </li>
              <li>
                <Link
                  className={pathname === "/dashboard/help" ? "active" : ""}
                  href="/"
                >
                  <FontAwesomeIcon icon={faInfoCircle} width={24} height={24} />
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className="flex justify-between items-center p-2 bg-black">
          <User />
          <SignOutButton />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
