import React from 'react';
import TopHeader from "../components/Header/TopHeader";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import PublicHeader from "../components/Header/PublicHeader";

function Register(props) {
    return (
        <div>
            <PublicHeader styles="w-full h-[121px]  flex items-center justify-between px-6 border border-b-2 border-gray-100 shadow-sm"/>
            <div className=" flex flex-col justify-center items-center mt-20">
                <RegisterForm/>
            </div>

            <Footer/>
        </div>
    );
}

export default Register;