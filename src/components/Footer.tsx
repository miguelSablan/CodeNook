"use client"
import React from 'react';
import { useEffect, useState } from "react";
import Navbar from './Navbar';
import { prototype } from 'events';

const Footer = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

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


    return (
        <div className = {`flex fixed h-14 items-center justify-between md:justify-around z-10 w-full py-2 bottom-10
            ${hasScrolled ? "border-b border-s-zinc-200" : ""}`        
        }         
        >            
        </div>
    );
};

export default Footer;
