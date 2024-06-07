import React from 'react';
import Line from "../Line";

const PropertyInfo = ({price, address, beds, baths, sqft,owner}) => {
    return (
        <div className=" bg-transparent  mt-9 ">
            <div className="flex  w-full">
                <div className="flex-auto text-left w-1/2 ">
                    <div className="text-4xl font-bold">${price}</div>
                    <div className="text-xl ">{address.street}, {address.city}  {address.state}</div>
                </div>
                <div className="flex-auto text-center ">
                    <div className="text-4xl font-bold ">{beds}</div>
                    <div className="text-xl">Beds</div>
                </div>
                <div className="flex-auto text-center">
                    <div className="text-4xl font-bold ">{baths}</div>
                    <div className="text-xl">Baths</div>
                </div>
                <div className="flex-auto text-center">
                    <div className="text-4xl font-bold ">{sqft}</div>
                    <div className="text-xl">Sqft</div>
                </div>
            </div>
            <div className="w-full mt-9 ">
                <Line />
                <div className="flex flex-auto  mt-7 mb-7">
                    <img src="../../asset/img/loggedin.webp" alt="User Photo" className="h-14 w-14 rounded-full"/>
                    <div className=" ml-7">
                        <p className="text-xl font-bold">Belayneh</p>
                        <p className="text-lg text-gray-500">Register Date: 12-10-2000</p>
                    </div>

                </div>
                <Line />
            </div>
        </div>
    );
};

export default PropertyInfo;
