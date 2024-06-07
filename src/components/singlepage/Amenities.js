import React from 'react';
import HomeIcon from "../../SvgIcon/HomeIcon";
import ShowMoreIcon from "../../SvgIcon/ShowMoreIcon";

function Amenities({amenities}) {
    return (
        <div className="flex-auto text-left  mt-7">
            <div className="text-4xl  text-justify font-bold ">Facts and Features</div>
            <div className="flex  flex-wrap w-full">
                {amenities.map((data) =>
                    data && (<div className="flex-auto text-left w-1/2 ">
                            <div className="flex items-center mt-9 ml-4">
                                <HomeIcon/>
                                <div className="ml-7">
                                    <h2 className="text-xl font-bold">{data}</h2>
                                </div>
                            </div>
                        </div>
                    ))}


            </div>
            <button
                className="mt-7 bg-white border border-black px-4 py-2 rounded flex items-center hover:bg-green-50 active:p-2">
                <span className="text-xl ml-2 p-2 pl-8 pr-8">Show all photos</span>
            </button>
        </div>
    );
}

export default Amenities;