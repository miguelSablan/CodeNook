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
    <>
      {userImage ? (
        <Image
          src={userImage}
          className="rounded-full flex-shrink-0"
          alt="avatar"
          height="40"
          width="40"
          priority
        />
      ) : (
        <div className="rounded-full bg-primary flex-shrink-0 h-10 w-10 text-white text-lg leading-24 flex items-center justify-center">
          <span className="text-white">{userName.charAt(0).toUpperCase()}</span>
        </div>
      )}
    </>
  );
};

export default Avatar;
