"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

const Avatar = () => {
  const { data: user } = useSession();

  if (!user) {
    return <div className="skeleton w-10 h-10"></div>;
  }

  const userImage = user.user.image !== "" ? user.user.image : undefined;
  const userName = user.user.name || user.user.username || "";

  return (
    <div className="h-10 w-10 flex-shrink-0">
      {userImage ? (
        <Image
          src={userImage}
          className="rounded-full"
          alt={`${userName}'s avatar`}
          height="128"
          width="128"
          priority
        />
      ) : (
        <div className="rounded-full bg-blue-500 h-full w-full text-white text-lg leading-[128px] flex items-center justify-center">
          <span className="text-white">{userName.charAt(0).toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
