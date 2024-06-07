import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import HeartIcon from "../SvgIcon/HeartIcon";
import Line from "./Line";

const Footer = () => {
    return (
        <footer className="w-full h-[450px] border-t border-gray-300 mt-32">
            <div className="container mx-auto flex flex-col items-center  mt-14">
                <div className="grid grid-cols-3 gap-4 w-full mb-14">
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-medium">Support</h3>
                        <p className="text-lg"><a href="#">Help Center</a></p>
                        <p className="text-lg"><a href="#">Get help with a safety issue</a></p>
                        <p className="text-lg"><a href="#">AirCover</a></p>
                        <p className="text-lg"><a href="#">Anti-discrimination</a></p>
                        <p className="text-lg"><a href="#">Disability support</a></p>
                        <p className="text-lg"><a href="#">Cancellation options</a></p>
                        <p className="text-lg"><a href="#">Report neighborhood concern</a></p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-medium">Hosting</h3>
                        <p className="text-lg"><a href="#">Help Center</a></p>
                        <p className="text-lg"><a href="#">Get help with a safety issue</a></p>
                        <p className="text-lg"><a href="#">AirCover</a></p>
                        <p className="text-lg"><a href="#">Anti-discrimination</a></p>
                        <p className="text-lg"><a href="#">Disability support</a></p>
                        <p className="text-lg"><a href="#">Cancellation options</a></p>
                        <p className="text-lg"><a href="#">Report neighborhood concern</a></p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-medium">Group9</h3>
                        <p className="text-lg"><a href="#">Help Center</a></p>
                        <p className="text-lg"><a href="#">Get help with a safety issue</a></p>
                        <p className="text-lg"><a href="#">AirCover</a></p>
                        <p className="text-lg"><a href="#">Anti-discrimination</a></p>
                        <p className="text-lg"><a href="#">Disability support</a></p>
                        <p className="text-lg"><a href="#">Cancellation options</a></p>
                        <p className="text-lg"><a href="#">Report neighborhood concern</a></p>
                    </div>
                </div>
                <Line />
                <div className="w-full bg-transparent  mt-7 flex items-center justify-between ">
                    <p className="text-lg">© 2024 WAAGroup9, Inc <a className="ml-7" href="#">Term </a> <a className="ml-7" href="#">Privacy</a></p>
                    <div className="flex items-center">
                        <button className="flex items-center justify-center mr-7  scale-150">
                            <i className="fas fa-globe"></i> <span className="ml-2 mb-1">English</span>
                        </button>
                        <button className="flex items-center ml-7 mr-7 scale-150">
                            <i className="fab fa-facebook"/>
                        </button>
                        <button className="flex items-center mr-7 scale-150">
                            <i className="fab fa-twitter"/>
                        </button>
                        <button className="flex items-center mr-7 scale-150">
                            <i className="fab fa-instagram"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
