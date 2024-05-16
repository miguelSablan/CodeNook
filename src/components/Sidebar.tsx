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
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const pathname = usePathname();

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={`flex h-screen bg-[#1d1d1d] text-white justify-between py-6 transition-all duration-200 ease-in-out overflow-hidden ${
        toggleCollapse ? "w-80 px-6" : "w-20 px-0"
      }`}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
    >
      <div className="flex flex-col p-4 justify-between w-full">
        {/* Logo */}
        <div className="flex justify-center items-center p-1 gap-4 w-full">
          <div className="text-4xl font-bold text-white">
            C
            <span className={`${!toggleCollapse && "hidden"} `}>
              ode<span className="text-blue-600">Nook</span>
            </span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                className={`w-full flex items-center gap-6 rounded-xl text-3xl font-medium p-3 transition duration-200 ease-in-out ${
                  isActive
                    ? "bg-white text-[#1d1d1d]"
                    : "hover:text-[#1d1d1d] hover:bg-white"
                } `}
                style={{
                  justifyContent: toggleCollapse ? "flex-start" : "center",
                  transition: "justify-content 0.2s ease-in-out",
                }}
              >
                <FontAwesomeIcon icon={link.icon} width={20} />
                {toggleCollapse && (
                  <span className="text-base ml-2">{link.label}</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div className="flex">
          <button
            className={`${
              !toggleCollapse && "hidden"
            } flex gap-6 w-full justify-center items-center rounded-2xl text-2xl font-medium p-4 transition duration-200 ease-in-out transform hover:bg-white hover:text-gray-800`}
            onClick={() => {
              signOut({ redirect: true, callbackUrl: "/" });
            }}
            style={{
              justifyContent: toggleCollapse ? "flex-start" : "center",
              transition: "justify-content 0.2s ease-in-out",
            }}
          >
            <FontAwesomeIcon icon={faSignOut} width={30} />
            {toggleCollapse && <span className="text-base ml-2">Logout</span>}
          </button>

          <button
            className={`p-4 rounded bg-[#1d1d1d] w-full ${
              toggleCollapse && "rotate-180"
            }`}
            onClick={handleSidebarToggle}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
