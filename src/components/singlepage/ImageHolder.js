import React, { useState } from 'react';
import ShowMoreIcon from "../../SvgIcon/ShowMoreIcon";
import CloseIcon from "../../SvgIcon/CloseIcon";
import PrevIcon from "../../SvgIcon/PrevIcon";
import NextIcon from "../../SvgIcon/NextIcon";

const ImageHolder = ({ img }) => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openPopup = (index) => {
        setCurrentImageIndex(index);
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % img.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + img.length) % img.length);
    };

    return (
        <div className="w-2/3 h-[620px] rounded-3xl shadow-md overflow-hidden relative">
            <div className="w-1/2 h-full float-left">
                <img
                    src={img[currentImageIndex].url}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover rounded-l-3xl cursor-pointer"
                    onClick={() => openPopup(currentImageIndex)}
                />
            </div>
            <div className="w-1/2 h-full flex flex-wrap">
                {img.slice(1, 5).map((image, index) => (
                    <div key={index} className="w-1/2 h-1/2 pb-1 pl-2">
                        <img
                            src={image.url}
                            alt={`Image ${index + 2}`}
                            className={`w-full h-full object-cover rounded-${index % 2 === 0 ? 't' : 'b'}l-30 cursor-pointer`}
                            onClick={() => openPopup(index + 1)}
                        />
                    </div>
                ))}
            </div>
            {popupOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
                    <div className="max-w-screen-lg w-full h-full relative">
                        <img
                            src={img[currentImageIndex].url}
                            alt={`Image ${currentImageIndex + 1}`}
                            className="absolute max-w-full max-h-full m-auto top-1/4"
                        />
                        <button className="absolute top-1/4 right-0 m-4 text-white shadow-2xl" onClick={closePopup}>
                            <CloseIcon />
                        </button>
                        <button
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
                            onClick={prevImage}>
                            <PrevIcon />
                        </button>
                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
                            onClick={nextImage}>
                            <NextIcon />
                        </button>
                    </div>
                </div>
            )}
            <div className="absolute bottom-4 right-4 flex items-center">
                <button className="bg-white border border-black px-4 py-2 rounded flex items-center active:p-2">
                    <ShowMoreIcon />
                    <span className="text-sm ml-2">Show all photos</span>
                </button>
            </div>
        </div>
    );
};

export default ImageHolder;
