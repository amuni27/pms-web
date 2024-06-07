import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../network/useAuth";

const TopHeader = ({styles}) => {
    const navigate = useNavigate();
    const {logout} = useAuth();
    const Tab = ({text}) => {
        return <div className="mx-4 text-gray-700 transition duration-500 hover:text-green-500 cursor-pointer"
                    onClick={() => navigate("/home")}>{text}</div>;
    };

    const [isOpen, setIsOpen] = useState(false);
    const navigationRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navigationRef.current && !navigationRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        // document.addEventListener("mousedown", handleClickOutside);
        // return () => {
        //     document.removeEventListener("mousedown", handleClickOutside);
        // };
    }, []);

    return (
        <div className={styles}>
            <div className="flex items-center">
                <img
                    src="/asset/img/logo.png"
                    alt="Logo"
                    className="ml-1/2 h-12 w-auto hover:cursor-pointer"
                    onClick={() => navigate("/home")}
                />
            </div>
            <div className="flex items-center">
                <Tab text="Home"/>
                <Tab text="Property"/>
                <Tab text="About"/>
                <Tab text="Contact"/>
            </div>
            <div ref={navigationRef} className="relative">
                <div className="ml-4" onClick={() => setIsOpen(!isOpen)}>
                    <img
                        src="/asset/img/loggedin.webp"
                        alt="User Icon"
                        className="h-12 w-12 rounded-full hover: cursor-pointer"
                    />
                </div>
                {isOpen && (
                    <div
                        className="absolute top-14 right-0 w-80 rounded-lg  bg-white border border-gray-300 shadow-xl p-2 animate-fadeIn z-30">
                        <ul className="list-none p-0">
                            <li className="mb-5 w-full h-16 text-xl text-center flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                                onClick={() => navigate("/account-settings")}>Account
                            </li>
                            <li className="mb-5 w-full h-16 text-xl text-center flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                                onClick={() => navigate("/wishlist")}>Wishlists
                            </li>
                            <li className="mb-5 w-full h-16 text-xl text-center flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                                onClick={() => {
                                    setIsOpen(!isOpen)
                                }}>Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );

};

export default TopHeader;
