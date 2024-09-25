"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

const Team = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-20 mt-5 ">
      <h1 className="font-bold text-3xl self-center">Meet the crew</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
        {/* Member */}
        <div className="flex gap-4">
          {/* Photo */}
          <img
            alt="Miguel Photo"
            src="https://media.licdn.com/dms/image/D4E03AQEHxnnUfDi1Lw/profile-displayphoto-shrink_400_400/0/1682184457215?e=2147483647&v=beta&t=lc9jeQ9r67VsNkDuzVQ3eBN1vlLi3RKxdaFKFIaLOlo"
            className="rounded-full w-24"
          />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Miguel Sablan</h3>

            {/* Role*/}
            <span className="text-sm text-left text-gray-400">Lead</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <Link
                className="btn btn-ghost btn-sm btn-circle"
                href="https://github.com/miguelSablan"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub as IconProp} size="xl" />
              </Link>

              <Link
                className="btn btn-ghost btn-sm btn-circle"
                href="https://www.linkedin.com/in/miguel-sablan/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin as IconProp} size="xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Member */}
        <div className="flex gap-4">
          {/* Photo */}
          <img
            alt="Samuel Photo"
            src="https://media.licdn.com/dms/image/v2/C5603AQEPCu9IKyU7Rg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659988510875?e=2147483647&v=beta&t=DDNGq9veF0j41HXZMKXGZ1-m3vn7AdxrAa2ZX4N5GRY"
            className="rounded-full w-24"
          />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Samuel Pellot</h3>

            {/* Role */}
            <span className="text-sm text-left text-gray-400">Co-Lead</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <Link
                className="btn btn-ghost btn-sm btn-circle"
                href="https://github.com/MasterShakezula"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub as IconProp} size="xl" />
              </Link>

              <Link
                className="btn btn-ghost btn-sm btn-circle"
                href="https://www.linkedin.com/in/samuelpellot/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin as IconProp} size="xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
