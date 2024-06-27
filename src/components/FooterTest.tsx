"use client"
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

const FooterTest = () => {

  const [hasScrolled, setHasScrolled] = useState(false);
    const showFooter = ((b: boolean) => {
        if (b) return (<FooterTest/>);
        else return (<div className = {""}></div>);
    }
    );
    useEffect(() => {
        const handleScrolling = () => {
            
            // if (window.scrollY < window.screen)
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            if (scrolledToBottom) setHasScrolled(true);
            else setHasScrolled(false);
            console.log("Have we scrolled to the bottom? " + scrolledToBottom);
            console.log("Has scrolled?: " + hasScrolled);
        }
        window.addEventListener("scroll", handleScrolling);
        return () => window.removeEventListener("scroll", handleScrolling);
    }

        );
    const findClass = () => {
        if (hasScrolled) return 'visible transition-opacity opacity-100 ease-in duration-100';
        else return 'visible ease-out duration-100 opacity-0';
    }


  return (
    
    <footer className={clsx(findClass(),"flex flex-col sm:flex-row gap-8 justify-between p-10 bg-black w-full")}>
      <aside>
        <Link className="text-3xl flex items-center gap-2 font-bold" href="/">
          <FontAwesomeIcon icon={faCodeBranch} />
          <div>
            <span className="text-blue-600">Code</span>Nook
          </div>
        </Link>
        <small>Copyright © 2024 - All rights reserved</small>
      </aside>

      <nav className="flex gap-0">
        <Link
          className="btn btn-ghost btn-md btn-circle text-2xl"
          href="https://github.com/miguelSablan/CodeNook"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub as IconProp} />
        </Link>
        <Link
          className="btn btn-ghost btn-md btn-circle text-2xl"
          href="/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter as IconProp} />
        </Link>
        <Link
          className="btn btn-ghost btn-md btn-circle text-2xl"
          href="/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook as IconProp} />
        </Link>
        <Link
          className="btn btn-ghost btn-md btn-circle text-2xl"
          href="/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube as IconProp} />
        </Link>
      </nav>
    </footer>
    
  );
};

export default FooterTest;
