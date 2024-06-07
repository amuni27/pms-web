import React, {createContext, useContext, useEffect, useState} from 'react';
import ImageHolder from "../components/singlepage/ImageHolder";
import TopPropertyTitle from "../components/singlepage/TopPropertyTitle";
import PropertyInfo from "../components/singlepage/PropertyInfo";
import Description from "../components/singlepage/Description";
import ContactOwner from "../components/singlepage/ContactOwner";
import AboutHouse from "../components/singlepage/AboutHouse";
import Line from "../components/Line";
import Amenities from "../components/singlepage/Amenities";

import MapBox from "../components/singlepage/MapBox";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import TopHeader from "../components/Header/TopHeader";
import {findById} from "../network/NetworkCall";
import useAuth from "../network/useAuth";
import PublicHeader from "../components/Header/PublicHeader";
import PropertyContext from "../context/PropertyContext"

function SingleProperty(props) {
    const {logged} = useAuth();
    const {id} = useParams();
    const {propertyData, setPropertyData} = useContext(PropertyContext)
    const [property, setProperty] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadData =  ()=>{
        const foundProperty = propertyData.find(data => parseInt(data.id) === parseInt(id));
        console.log(foundProperty)
        if (foundProperty) {
            setProperty(foundProperty);
        } else {
            setError(new Error('Property not found!'));
        }
    }
    useEffect(() => {
        loadData()

    }, [id],[propertyData]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-xl">Error: {error.message}</p>;
    if (!property) return <p className="text-xl">Property not found!</p>;

    return (
            <div>
                {true ? (
                    <TopHeader
                        styles="w-full h-[121px]  flex items-center justify-between px-6 border border-b-2 border-gray-100 shadow-sm z-20"/>) : (
                    <PublicHeader styles="w-full h-[121px]  flex items-center justify-between px-6"/>)}
                <div className=" flex flex-col justify-center items-center mt-20 ">
                    <TopPropertyTitle title={property.title}/>
                    <ImageHolder img={property.images}/>
                    <div className="w-2/3 flex flex-auto">
                        <div className="w-3/5 flex-auto">
                            <PropertyInfo price={property.price} address={property.address} baths={2}
                                          beds={property.bedrooms} sqft={property.totalArea} owner={property.owner}/>
                            <AboutHouse title={property.propertyType}
                                        description="A common area with wifi that’s well-suited for working"/>
                            <AboutHouse title="Condominium"
                                        description="A common area with wifi that’s well-suited for working"/>
                            <AboutHouse title="Condominium"
                                        description="A common area with wifi that’s well-suited for working"/>
                            <Line/>
                            <Description description={property.description}/>
                            <Line/>
                            <Amenities amenities={property.amenities}/>
                            <MapBox latitude={property.address.latitude} longitude={property.address.longitude}/>

                        </div>
                        <div className="flex-auto w-2/5">
                            <ContactOwner id={property.id}/>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
    );
}

export default SingleProperty;