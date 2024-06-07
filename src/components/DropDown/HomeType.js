import React from 'react';
import NumberInput from "./NumberInput";

const HomeType = () => {
    return (
        <div
            className="absolute  top-24 bottom-0 h-96 w-80 rounded-lg  bg-white border border-gray-300 shadow-xl p-2 animate-fadeIn z-20">
            <ul className="list-none p-0">
                <li className="h-10 text-3xl ml-8 mt-4 text-left"><input type="checkbox" className="scale-[2] mr-4"/> <span>All</span></li>
                <li className="h-10 text-3xl ml-8 mt-4 text-left"><input type="checkbox" className="scale-[2] mr-4"/> <span>Condominium</span></li>
                <li className="h-10 text-3xl ml-8 mt-4 text-left"><input type="checkbox" className="scale-[2] mr-4"/> <span>Home</span></li>
                <li className="h-10 text-3xl ml-8 mt-4  text-left"><input type="checkbox" className="scale-[2] mr-4"/> <span>TownHouse</span></li>
                <li className="h-10 text-3xl ml-8 mt-4 text-left"><input type="checkbox" className="scale-[2] mr-4"/> <span>Cabin</span></li>
                <li className="h-10 text-3xl ml-8 mt-4 text-left"><input type="checkbox" className="scale-[2] mr-4"/> <span>FarmHouse</span></li>



            </ul>
        </div>
    );
};

export default HomeType;
