"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-20 mt-5 ">
      <h1 className="font-bold text-3xl self-center">Meet the crew</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
        {/* Member */}
        <div className="flex gap-4">
          {/* Photo */}
          <img
            alt="https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1660833954461?e=1732752000&v=beta&t=P1SgIh0_eUhjQvsur2IIl9bI9cYrxG28nm6a4G7WJUo"
            src="https://media.licdn.com/dms/image/v2/D4E35AQEGCC7CUcp6zQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1682979942234?e=1727823600&v=beta&t=-6sMG52MPVf9NLjNPI0w9brT7KSwYjYUrJryVMfpGp4"
            className="rounded-full w-24"
          />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Miguel Sablan</h3>

            {/* Role*/}
            <span className="text-sm">Lead</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <a
                className="btn btn-ghost btn-sm btn-circle"
                href="https://github.com/miguelSablan"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                className="btn btn-ghost btn-sm btn-circle href"
                href="https://www.linkedin.com/in/miguel-sablan/"
              >
                {/*<i className="fa-brands fa-twitter text-lg"></i>*/}
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Member */}
        <div className="flex gap-4">
          {/* Photo */}
          <img
            alt="https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1660833954461?e=1732752000&v=beta&t=P1SgIh0_eUhjQvsur2IIl9bI9cYrxG28nm6a4G7WJUo"
            src="https://media.licdn.com/dms/image/v2/C5603AQEPCu9IKyU7Rg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659988510875?e=2147483647&v=beta&t=DDNGq9veF0j41HXZMKXGZ1-m3vn7AdxrAa2ZX4N5GRY"
            className="rounded-full w-24"
          />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Samuel Pellot</h3>

            {/* Role */}
            <span className="text-sm">Co-Lead</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <a
                className="btn btn-ghost btn-sm btn-circle"
                href="https://github.com/MasterShakezula"
              >
                <i className="fa-brands fa-github text-lg"></i>
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                className="btn btn-ghost btn-sm btn-circle"
                href="https://www.linkedin.com/in/samuelpellot/"
              >
                <i className="fa-brands fa-twitter text-lg"></i>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
