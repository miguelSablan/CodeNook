import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-bold text-3xl self-center">Meet the crew</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
        {/* Member */}

        <div className="flex gap-4">
          {/* Photo */}
          <img alt="Logo" src="/avatar.png" className="rounded-full w-24" />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">David Forren</h3>

            {/* Role */}
            <span className="text-sm">Founder / CEO</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-github text-lg"></i>
              </a>

              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-twitter text-lg"></i>
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
          <img alt="Logo" src="/avatar.png" className="rounded-full w-24" />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Amil Evara</h3>

            {/* Role*/}
            <span className="text-sm">UI/UX Designer</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-github text-lg"></i>
              </a>

              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-twitter text-lg"></i>
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
          <img alt="Logo" src="/avatar.png" className="rounded-full w-24" />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Ebele Egbuna</h3>

            {/* Role */}
            <span className="text-sm">Support consultant</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-github text-lg"></i>
              </a>

              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-twitter text-lg"></i>
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
          <img alt="Logo" src="/avatar.png" className="rounded-full w-24" />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Maria Powers</h3>

            {/* Role */}
            <span className="text-sm">Director of sales</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-github text-lg"></i>
              </a>

              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-twitter text-lg"></i>
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
          <img alt="Logo" src="/avatar.png" className="rounded-full w-24" />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Delia Pawelke</h3>

            {/* Role */}
            <span className="text-sm">Front-end developer</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-github text-lg"></i>
              </a>

              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-twitter text-lg"></i>
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
          <img alt="Logo" src="/avatar.png" className="rounded-full w-24" />

          <div className="flex flex-col gap-2">
            {/* Name */}
            <h3 className="font-bold">Tom Lowry</h3>

            {/* Role */}
            <span className="text-sm">UI/UX Designer</span>

            {/* Socials */}
            <div className="flex text-accent text-xs">
              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-github text-lg"></i>
              </a>

              <a className="btn btn-ghost btn-sm btn-circle">
                <i className="fa-brands fa-twitter text-lg"></i>
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
