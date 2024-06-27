"use client"
import React from 'react';
import { useEffect, useState } from "react";
import FooterTest from './FooterTest';
import Navbar from './Navbar';
import { prototype } from 'events';
import clsx from  'clsx';

const Footer = () => {

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
        if (hasScrolled) return 'visible ease-out duration-300';
        else return 'visible transition-opacity opacity-100 ease-in duration 300';
    }

    return (
        
            <FooterTest/>
        
        
    );
};

export default Footer;
