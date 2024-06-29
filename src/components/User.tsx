"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const User = () => {
  const { data: user } = useSession();

  if (!user) {
    return (
      <Link className="btn btn-ghost" href="/profile">
        <div className="skeleton w-8 h-8"></div>

        <div className="flex flex-col text-start w-[150px]">
          <span className="font-bold text-white truncate">userName</span>
          <span className="text-sm text-accent truncate">user@email.com</span>
        </div>
      </Link>
    );
  }

  const userImage = user.user.image !== "" ? user.user.image : undefined;
  const name = user.user.name || "name";
  const username = user.user.username || "username";

  return (
    <Link className="btn btn-ghost" href="/dashboard/profile">
      {userImage ? (
        <Image
          src={userImage}
          className="rounded-full"
          alt="avatar"
          height="32"
          width="32"
          priority
        />
      ) : (
        <div className="rounded-full bg-blue-500 flex-shrink-0 h-8 w-8 text-white text-lg leading-24 flex items-center justify-center">
          <span className="text-white">{username.charAt(0).toUpperCase()}</span>
        </div>
      )}

      <div className="flex flex-col text-start md:w-[150px]">
        <span className="font-bold text-white">{name}</span>
        <span className="text-sm text-accent">@{username}</span>
      </div>
    </Link>
  );
};

export default User;
