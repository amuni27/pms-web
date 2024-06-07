import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";
import Card from "../components/Card";
import TopHeader from "../components/Header/TopHeader";

function AccountSetting(props) {
    const navigate = useNavigate();
    const personalInfo = () => {
        navigate("/account-settings/personal-info")
    }
    return (
        <div>
            <TopHeader styles="w-full h-[121px]  flex items-center justify-between px-6 border border-b-2 border-gray-100 shadow-sm"/>
            <div className=" flex flex-col justify-center items-center mt-20">
                <div className="w-[60%] bg-transparent  pb-14 ">
                    <h1 className="text-5xl mb-3">Account</h1>
                    <p className="text-xl">Amanuel Gizachew, amanuukaye@gmail.com </p>
                </div>
                <div className="w-[60%] bg-transparent  pb-7 flex items-center justify-between">
                    <Card title="Personal info" description="Provide personal details and how we can reach you"
                          icon="fas fa-user scale-[2]" onClick={personalInfo}/>
                    <Card title="Login & security" description="Update your password and secure your account"
                          icon="fas fa-shield-alt scale-[2]"/>
                    <Card title="Privacy & sharing"
                          description="Manage your personal data, connected services, and data sharing settings"
                          icon="fas fa-eye scale-[2]"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AccountSetting;