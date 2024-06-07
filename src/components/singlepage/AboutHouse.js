import React from 'react';
import HomeIcon from "../../SvgIcon/HomeIcon";

const AboutHouse = ({ title, description }) => {
    return (
        <div className="flex items-center mt-9 ml-4">
            <HomeIcon />
            <div className="ml-7">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-lg text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default AboutHouse;
