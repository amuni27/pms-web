import React, {useRef} from 'react';
import CloseIcon from "../../SvgIcon/CloseIcon";
import useAuth from "../../network/useAuth";
import {create, createWithExtraResource} from "../../network/NetworkCall";


const ContactForm = ({id, closePopup}) => {
    const {user} = useAuth();
    const amount = useRef();
    const message = useRef();
    const currentDate = new Date();
   const email=localStorage.getItem('email')

    const sendOffer = () => {
        createWithExtraResource('properties', id, 'offers', {
            "email": email,
            "propertyId": id,
            "offerAmount": amount.current.value,
            "offerDate": currentDate,
            "offerDescription": message.current.vaue
        }).then(data => {
            alert("Offer sent")
            closePopup()
        }).catch(error => console.log(error))
    }

    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
            <div className="max-w-screen-lg w-full h-full relative">
                <div className="absolute w-1/2 top-[10%] left-1/4 rounded-lg border bg-white border-gray-400 shadow-md">
                    <div className="flex items-center justify-between  shadow-md  h-24 mb-8">
                        <p className="text-xl font-bold pl-6">Contact agent</p>
                        <button className="m-4 text-black shadow-2xl pr-4" onClick={closePopup}>
                            <CloseIcon/>
                        </button>
                    </div>
                    <div className="p-8">
                        <p className="text-3xl font-bold mb-8">Welcome to Group 9</p>
                        <div className="mb-8">
                            <input
                                ref={amount}
                                type="number"
                                className="w-full h-20 border border-gray-400 rounded-t-lg px-4 text-xl"
                                placeholder="offer amount"
                            />
                            <textarea
                                ref={message}
                                className="p-4 w-full h-44 border border-gray-400  px-4 text-xl"
                                placeholder="Message"
                            />

                        </div>
                        <button className="w-full h-20 rounded-xl bg-green-500 text-white text-lg active: p-3"
                                onClick={sendOffer}>
                            Send Offer
                        </button>
                        {/*<div className=" mt-4 flex justify-end">*/}
                        {/*    <p className=" text-lg right-0">if you have an account <span className="text-green-500"><Link to="/login">Log in</Link></span></p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContactForm;