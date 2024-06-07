import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
const Card = ({icon , title, description ,onClick}) => {
    return (
        <div className="w-[32%] h-[200px] bg-white rounded-xl p-5 overflow-hidden shadow-xl active:ml-1 cursor-pointer" onClick={onClick}>
            <div className="items-start">
                <div className=" w-full mb-10 mr-3 mt-4 ml-2"><i className={icon}/></div>
                <div>
                    <h1 className="text-2xl ">{title}</h1>
                    <p className="text-lg text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
