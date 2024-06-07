import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {create} from "../network/NetworkCall";

const RegisterForm = () => {
    const navigate = useNavigate();
    const name = useRef();
    const userName = useRef();
    const email = useRef();
    const password = useRef();

    const register = () => {
        const data = {
            "name": name.current.value,
            "userName": userName.current.value,
            "email": email.current.value,
            "password": password.current.value,
            "userType": "BUYER"
        };
        if (data.name == null && data.userName == null && data.email == null && data.password == null) return alert("fill all the filed")
        create("user", data).then(data => {
            navigate('/verify')
        }).catch(err => {
            console.log(err)
            alert(err.response.data)
        })
    }

    return (
        <div className="w-2/6 rounded-lg border border-gray-400 shadow-md">
            <div className="flext items-center text-center shadow-md  h-24 mb-8">
                <p className="text-xl font-bold pt-8">sign up or Log in</p>
            </div>
            <div className="p-8">
                <p className="text-3xl font-bold mb-8">Welcome to Group 9</p>
                <div className="mb-8">
                    <input
                        ref={name}
                        type="text"
                        className="w-full h-20 border border-gray-400 rounded-t-lg px-4 text-xl"
                        placeholder="First name"
                    />
                    <input
                        ref={userName}
                        type="text"
                        className="w-full h-20 border border-gray-400  px-4 text-xl"
                        placeholder="Username"
                    />
                    <input
                        ref={email}
                        type="text"
                        className="w-full h-20 border border-gray-400  px-4 text-xl"
                        placeholder="Email"
                    />
                    <input
                        ref={password}
                        type="password"
                        className="w-full h-20 border border-gray-400 rounded-b-lg px-4 text-xl mt-0"
                        placeholder="Password"
                    />
                </div>
                <button onClick={register} className="w-full h-20 rounded-xl bg-green-500 text-white text-lg active: p-3">
                    Signup
                </button>
                <div className=" mt-4 flex justify-end">
                    <p className=" text-lg right-0">if you have an account <span className="text-green-500"><Link
                        to="/login">Log in</Link></span></p>
                </div>
            </div>
        </div>
    );
};


export default RegisterForm;