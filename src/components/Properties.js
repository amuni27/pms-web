import React, {useContext, useEffect, useState} from 'react';
import Property from "./Property";
import {find} from "../network/NetworkCall";
import login from "../page/Login";
import PropertyContext from "../context/PropertyContext";


function Properties({criteria}) {
    const {propertyData, setPropertyData} = useContext(PropertyContext)
    const [property, setProperty] = useState(null)
    const [error, setError] = useState(null)

    // useEffect(() => {
    //     console.log("I'm in properties ", criteria);
    //
    //     if (criteria !== null && typeof criteria !== 'undefined') {
    //         const queryParams = [];
    //         if (criteria.minPrice !== null && typeof criteria.minPrice !== 'undefined') {
    //             queryParams.push(`minPrice=${criteria.minPrice}`);
    //         }
    //         if (criteria.maxPrice !== null && typeof criteria.maxPrice !== 'undefined') {
    //             queryParams.push(`maxPrice=${criteria.maxPrice}`);
    //         }
    //         if (criteria.propertyType !== null && typeof criteria.propertyType !== 'undefined') {
    //             queryParams.push(`propertyType=${criteria.propertyType}`);
    //         }
    //         if (criteria.minBedrooms !== null && typeof criteria.minBedrooms !== 'undefined') {
    //             queryParams.push(`minBedrooms=${criteria.minBedrooms}`);
    //         }
    //
    //         // Construct the endpoint by joining queryParams with '&' and prefixing with 'properties?'
    //         const endpoint = queryParams.length > 0 ? `properties?${queryParams.join('&')}` : 'properties';
    //
    //         console.log(endpoint)
    //         // Make the request with the constructed endpoint
    //         find(endpoint)
    //             .then(response => {
    //                 console.log(response.data);
    //                 setProperty(response.data);
    //             })
    //             .catch(error => setError(error));
    //     } else {
    //         console.log("2")
    //         // If criteria is null or undefined, fetch all properties
    //         find('properties')
    //             .then(response => {
    //                 console.log(response.data);
    //                 setProperty(response.data);
    //             })
    //             .catch(error => setError(error));
    //     }
    // }, [criteria]);

    useEffect(()=>{
        setProperty(propertyData)
    })


    if (error)
        return (<div className="flex flex-col justify-center items-center mt-36 mb-48">
            <p className="text-xl">There is no Property</p>

        </div>)

    return (
        <div
            className="w-full p-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {property && property.map(response =>
                <Property key={response.id} id={response.id} images={response.images} title={response.title}
                          address={response.address}
                          price={response.price} description={response.minidescription}/>
            )}
        </div>
    );
}

export default Properties;