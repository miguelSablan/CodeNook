import React from 'react';
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
    return (
        <footer className="flex flex-col sm:flex-row gap-8 justify-between p-10 bg-base-200">    
            <aside>
                <p className="text-3xl flex items-center gap-0 ">
                    <div className="inline w-9">
                            <FontAwesomeIcon icon = {faCodeBranch}/>                   
                    </div>                    
                    <span className ="text-blue-600">Code</span>Nook
                </p>
                <small>Copyright © 2024 - All rights reserved</small>
            </aside>
   
            <nav className="flex gap-4">
                <a className="btn btn-ghost btn-sm btn-circle">
                    <i className="fa-brands fa-github text-2xl"></i>
                </a>
                <a className="btn btn-ghost btn-sm btn-circle">
                    <i className="fa-brands fa-twitter text-2xl"></i>
                </a>
                <a className="btn btn-ghost btn-sm btn-circle">
                    <i className="fa-brands fa-facebook text-2xl"></i>
                </a>
                <a className="btn btn-ghost btn-sm btn-circle">
                    <i className="fa-brands fa-youtube text-2xl"></i>
                </a>
            </nav>
</footer>
    );
};

export default App;
