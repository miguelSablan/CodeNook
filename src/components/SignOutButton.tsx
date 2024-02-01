"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      className="mr-4 bg-black text-white py-2 px-4 rounded hover:opacity-75"
      onClick={() => {
        signOut({ redirect: true, callbackUrl: "/" });
      }}
    >
      Logout
    </button>
  );
};

export default SignOutButton;
