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
} from "@fortawesome/free-solid-svg-icons";
import SignOutButton from "@/components/SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, href: "/dashboard", label: "Home", icon: faHouse },
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
        toggleCollapse ? "w-80 px-6 text-left" : "w-20 px-0 text-left"
      }`}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
    >
      <div className="flex flex-col p-4 z-10 sticky top-0 left-0 md:h-screen">
        <div className="flex items-center justify-between relative w-full">
          <div className="flex items-center p-1 gap-4 w-full">
            <div className="text-3xl font-bold text-center">C</div>
            <span className={`text-lg ${!toggleCollapse && "hidden"}`}>
              CodeNook
            </span>
          </div>

          {isCollapsible && (
            <button
              className={`p-4 rounded bg-white absolute right-0 w-full   ${
                toggleCollapse && "rotate-180"
              }`}
              onClick={handleSidebarToggle}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 mt-40 w-full">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                className={`flex w-full justify-center gap-6 items-center rounded-2xl uppercase text-2xl font-medium p-3 transition duration-200 ease-in-out ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "hover:text-white hover:bg-gray-800"
                }`}
              >
                <FontAwesomeIcon icon={link.icon} width={30} />
                <span className={`mt-2 text-lg ${!toggleCollapse && "hidden"}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group w-56 h-10 bg-gradient-to-r from-cyan-400 to-cyan-500 ml-0">
          <FontAwesomeIcon icon={faHouse} />
          <span className={`mt-2 text-lg ${!toggleCollapse && "hidden"}`}>
            CodeNook
          </span>
        </button>
        <Link
          href={"/"}
          className="flex gap-6 items-center rounded-2xl text-2xl font-medium p-3 transition duration-200 ease-in-out transform hover:bg-indigo-300 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faHouse} width={30} />
          <span className={`text-lg ${!toggleCollapse && "hidden"}`}>Link</span>
        </Link> */}
      </div>

      {/* Logout */}
      <div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default Sidebar;
