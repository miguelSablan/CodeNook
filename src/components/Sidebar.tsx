"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBriefcase,
  faNewspaper,
  faUser,
  faArrowRight,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navLinks = [
  { id: 1, href: "/feed", label: "Home", icon: faHouse },
  { id: 2, href: "/jobs", label: "Jobs", icon: faBriefcase },
  { id: 3, href: "/news", label: "News", icon: faNewspaper },
  { id: 4, href: "/profile", label: "Profile", icon: faUser },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
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
      className={`flex flex-col h-screen bg-white justify-between py-8 transition-all duration-200 ease-in-out overflow-hidden ${
        toggleCollapse ? "w-80 px-6" : "w-20 px-0"
      }`}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
    >
      <div className="flex flex-col p-4 ">
        {/* Logo and button */}
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex justify-center items-center p-1 gap-4 w-full">
            <div className="text-4xl font-medium">
              C<span className={`${!toggleCollapse && "hidden"}`}>odeNook</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2 mt-40">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                className={`w-full flex items-center gap-6 rounded-xl text-3xl font-medium p-3 transition duration-200 ease-in-out ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "hover:text-white hover:bg-gray-800"
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
          className={`p-4 rounded bg-white w-full ${
            toggleCollapse && "rotate-180"
          }`}
          onClick={handleSidebarToggle}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
