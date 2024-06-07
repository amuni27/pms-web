import React from 'react';
import PublicHeader from "../components/Header/PublicHeader";
import Footer from "../components/Footer";

function VerifyPage(props) {
    return (
        <div>
            <PublicHeader styles="w-full h-[121px]  flex items-center justify-between px-6 border border-b-2 border-gray-100 shadow-sm"/>
            <div className="flex flex-col justify-center items-center mt-36 mb-48">
                <p className="text-xl">Successfully Registered, check your email to verify your account<a href="http://gmail.com" className="text-xl underline font-bold text-blue-600 ml-4">verify</a> </p>
            </div>
            <Footer/>
        </div>

    );
}

export default VerifyPage;