import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeartIcon from "../SvgIcon/HeartIcon";
import {Link, useNavigate} from "react-router-dom";
import {createByIdWithExtraResourceWithExtraId} from "../network/NetworkCall";
import HeartIconRed from "../SvgIcon/HeartIconRed";
import useAuth from "../network/useAuth";

const Property = ({id, images, title, address, price, description}) => {
    const [like, setLike] = useState(false);
    const sliderRef = useRef(null);
    const navigate = useNavigate();
    const {user, logged} = useAuth()
    address = address.street + ", " + address.city + " " + address.state;
    console.log(images)
    const handleClick = () => {
        navigate(`/property/${id}`);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const goToNext = () => {
        console.log('Next button clicked');
        sliderRef.current.slickNext();
    };

    const likeClicked = (() => {
        createByIdWithExtraResourceWithExtraId('user', 1, 'mylist', id).then(data => setLike(true)).catch(err => {
            console.log(err)
            setLike(false)
        })
    })

    const goToPrev = () => {
        console.log('prev button clicked');
        sliderRef.current.slickPrev();
    };
    return (
        <div
            className="inline-block ml-4 mb-10  h-[520px]  bg-gray-100 rounded-lg shadow-xl overflow-hidden relative hover:cursor-pointer transition duration-300 hover:bg-gray-200">
            <Slider ref={sliderRef} {...settings}>
                {images && images.map(response => (
                    <div onClick={handleClick}>
                        <img
                            src={response.url}
                            alt={response.propertyId}
                            className="w-full h-[340px] object-cover rounded-lg "
                        />
                    </div>
                ))}
            </Slider>


            <div className="absolute bottom-0 w-full p-3  box-border" onClick={handleClick}>
                <h1 className="text-md font-segoe-ui font-bold text-left">{title}</h1>
                <p className="text-sm font-segoe-ui text-left">{address} </p>
                <p className="text-xs font-segoe-ui text-left">{description}</p>
                <div className="w-full bg-transparent  mt-5 mb-5 flex items-center justify-between ">
                    <div className=" " onClick={() => {
                        if (logged) {
                            likeClicked();
                            console.log(user)
                        } else alert("First you should login")
                    }}>
                        {like ? (
                            <>
                                <HeartIconRed className="h-6 w-6 p-0.5 mr-1"/>
                                <span>Saved</span>
                            </>
                        ) : (
                            <>
                                <HeartIcon className="h-8 w-8 p-0.5 fill-black mr-1 hover:h-10 w-10"/>

                            </>)}

                    </div>
                    <div className="text-2xl font-bold   right-0">${price}</div>

                </div>
            </div>

            <button onClick={goToPrev}
                    className="absolute top-1/3 left-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full  transition duration-300 hover:bg-green-500">
                {/* Left arrow SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <button onClick={goToNext}
                    className="absolute top-1/3 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full transition duration-300 hover:bg-green-500">
                {/* Right arrow SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    );
};

export default Property;
