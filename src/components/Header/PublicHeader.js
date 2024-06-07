import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import {useNavigate} from "react-router-dom";

const PublicHeader = ({styles}) => {
 const navigate =useNavigate();
    return (
        <div className={styles}>
            <div className="flex items-center">
                <img
                    src="/asset/img/logo.png"
                    alt="Logo"
                    className="h-12 w-auto hover: cursor-pointer"
                    onClick={()=>navigate("/home")}
                />
            </div>
            <div className="ml-4">
                <div className="h-12 w-12 rounded-full bg-gray-400"><i
                    className="relative fas fa-user scale-[1.5] top-3 left-4 text-white"/></div>
            </div>
        </div>
    );

};

export default PublicHeader;
