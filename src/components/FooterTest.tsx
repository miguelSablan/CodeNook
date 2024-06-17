import React from 'react';
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const App = () => {
    return (
        <footer className="flex flex-col sm:flex-row gap-8 justify-between p-10 bg-base-200">    
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
   
            <nav className="flex gap-4">
                <a className="btn btn-ghost btn-sm btn-circle">                
                    <img src = "/github.svg"></img>
                </a>
                <a className="btn btn-ghost btn-sm btn-circle">
                    <img src = "/google.svg"></img>
                </a>
                <a className="btn btn-ghost btn-sm btn-circle">
                    <img src = "/discord.svg"></img>
                </a>
                <a className="btn btn-ghost btn-sm btn-circle">
                    <img src = "/next.svg"></img>
                </a>
            </nav>
</footer>
    );
};

export default App;
