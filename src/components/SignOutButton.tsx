"use client";

import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const SignOutButton = () => {
  return (
    <button
      className="flex gap-6 w-full items-center rounded-2xl uppercase text-2xl font-medium p-3 transition duration-200 ease-in-out transform hover:bg-white hover:text-gray-800"
      onClick={() => {
        signOut({ redirect: true, callbackUrl: "/" });
      }}
    >
      <FontAwesomeIcon icon={faSignOut} width={30} />
      Logout
    </button>
  );
};

export default SignOutButton;
