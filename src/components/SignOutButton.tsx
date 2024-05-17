"use client";

import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const SignOutButton = () => {
  return (
    <a
      className="btn btn-primary btn-sm mr-3"
      title="Logout"
      onClick={() => {
        signOut({ redirect: true, callbackUrl: "/" });
      }}
    >
      <FontAwesomeIcon icon={faSignOut} width={24} height={24} />
    </a>
  );
};

export default SignOutButton;
