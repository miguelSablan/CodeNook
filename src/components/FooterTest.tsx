import React from 'react';
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FooterTest = () => {
    return (
        <footer className=" flex flex-col sm:flex-row gap-64 justify-between p-10 bg-base-200">    
            <aside>
                <div>
                    <Link className="" href="/">
                        <p className="text-3xl flex items-center gap-0 font-bold">
                            
                            <div className="inline w-9">
                                    <FontAwesomeIcon icon = {faCodeBranch}/>                   
                            </div>                    
                            <span className ="text-blue-600 ">Code</span>Nook
                        </p>
                    </Link>
                    <small>Copyright © 2024 - All rights reserved</small>
                </div>
            </aside>
            
            <div>
                <nav className="flex gap-0">
                    <a className="btn btn-ghost btn-md btn-circle">                
                        <img src = "/github.svg"></img>
                    </a>
                    <a className="btn btn-ghost btn-md btn-circle">
                        <img src = "/google.svg"></img>
                    </a>
                    <a className="btn btn-ghost btn-md btn-circle">
                        <img src = "/discord.svg"></img>
                    </a>
                    <a className="btn btn-ghost btn-md btn-circle">
                        <img src = "/next.svg"></img>
                    </a>
                </nav>
            </div>    
        </footer>
        
    );
};

export default FooterTest;
