import React from 'react';

const NavList = () => {
    return (
        <div className="w-40 bg-white rounded-lg border border-gray-300 shadow-inner p-2 z-20">
            <ul className="list-none p-0">
                <li className="h-10 text-lg text-center">Account</li>
                <li className="h-10 text-lg text-center">Logout</li>
            </ul>
        </div>
    );
};

export default NavList;
