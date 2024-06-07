import React, {useState} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Line from "../components/Line";

const PersonalInfoPage = () => {
    // Define state variables to hold user information
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions to update user information (e.g., make API call)
        console.log('Form submitted!');
        console.log('First Name:', fullname);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
    };

    return (
        <div>
            <Header/>
            <div className=" flex flex-col justify-center items-center mt-20">
                <div className="w-[60%] bg-transparent  pb-14 ">
                    <h1 className="text-4xl mb-3 font-bold">Personal info</h1>
                </div>
                <div className="w-[60%] bg-transparent  pb-7 ">
                    <div className="flex  items-center justify-between ">
                        <div className="mt-7 ">
                            <h1 className="text-2xl ">Legal Name</h1>
                            <p className="text-lg text-gray-500">Amanuel Lawro{fullname}</p>
                        </div>
                        <div className="mt-7 ">
                            <h1 className="text-2xl hover:underline cursor-pointer">Edit</h1>

                        </div>
                    </div>
                    <Line/>
                    <div className="flex  items-center justify-between ">
                        <div className="mt-7 ">
                            <h1 className="text-2xl ">Email address</h1>
                            <p className="text-lg text-gray-500">a***e@gmail.com{fullname}</p>
                        </div>
                        <div className="mt-7 ">
                            <h1 className="text-2xl hover:underline cursor-pointer">Edit</h1>

                        </div>
                    </div>
                    <Line/>
                    <div className="flex  items-center justify-between ">
                        <div className="mt-7 ">
                            <h1 className="text-2xl ">Phone numbers</h1>
                            <p className="text-lg text-gray-500">Add a number so confirmed guests and  can get in touch. You can add other numbers and choose how they’re used.{fullname}</p>
                        </div>
                        <div className="mt-7 ">
                            <h1 className="text-2xl hover:underline cursor-pointer">Edit</h1>

                        </div>
                    </div>
                    <Line/>
                    <div className="flex  items-center justify-between ">
                        <div className="mt-7 ">
                            <h1 className="text-2xl ">Address</h1>
                            <p className="text-lg text-gray-500">Not provided{fullname}</p>
                        </div>
                        <div className="mt-7 ">
                            <h1 className="text-2xl hover:underline cursor-pointer">Edit</h1>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PersonalInfoPage;
