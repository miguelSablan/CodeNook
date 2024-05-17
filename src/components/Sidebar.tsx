"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faNewspaper,
  faUser,
  faArrowRight,
  faSignOut,
  faUsers,
  faHouse,
  faFire,
  faSuitcase,
  faMagnifyingGlass,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

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
    <div className="flex">
      <aside className="h-screen sticky top-0 flex flex-col bg-[#1d1d1d] text-white overflow-y-auto">
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
                <a className={pathname === "/youtube" ? "active-link" : ""}>
                  <FontAwesomeIcon icon={faUsers} width={24} height={24} />
                  YouTube
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

          <a className="btn btn-primary btn-sm mr-3" title="Logout">
            <FontAwesomeIcon icon={faSignOut} width={24} height={24} />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
