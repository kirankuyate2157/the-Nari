
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoggleAuth, register } from "../../services/appwriteConfig";
import logo from "../nari.png";
import nariName from "../NariName.png";





export default function SignUp() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",

    });

    const handleChange = (e) =>
        setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));


    const submit = async (e) => {
        e.preventDefault();

        if (userData.email && userData.password && userData.userName) {
            register(userData.email, userData.password, userData.userName).then((account) => alert(`Successfully created account with ID : ${account.$id}`))
            navigate('/signin');
        }
        else {
            if (!userData.email) {
                alert("Email is required !");
            }
            if (!userData.password) {
                alert("Password is required !");
            }
            if (userData.password.length < 8) {
                alert("Password must be at least 8 characters !")
            }
        }

        setUserData({
            userName: "",
            email: "",
            password: "",
        });
    }
    const googleLogin = (e) => {
        e.preventDefault();
        GoggleAuth(
            "http://localhost:3000/home",
            "http://localhost:3000/signup"
        )
    }

    return (
        <>

            <div className="flex flex-row w-full p-20  justify-center  align-middle">
                <div className="inline-block w-full max-w-md md:p-6 md:my-8 overflow-hidden text-left align-middle transition-all transform  shadow-sm rounded-2xl">

                    <div className=" flex flex-col w-full">
                        <div className="  items-center  flex flex-col gap-3 ">
                            <div>
                                <img src={logo} alt="nari logo"
                                    className="h-48 " />
                            </div>

                        </div>
                        <div className="mb-2  items-center  flex flex-col  ">
                            <div>
                                <img src={nariName} alt="nari logo"
                                    className="h-12"
                                />
                            </div>

                        </div>

                        <form className="flex flex-col gap-3">
                            <div className=" w-full flex flex-col gap-2">

                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    onChange={handleChange}
                                    value={userData.userName}
                                    placeholder="userName.."
                                    className="w-full border border-bcc-500 px-3 py-2 rounded-xl focus:outline-none focus:border-zomato-500"
                                />
                            </div>
                            <div className=" w-full flex flex-col gap-2">

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={userData.email}
                                    placeholder="email.."
                                    className="w-full border border-bcc-500 px-3 py-2 rounded-xl focus:outline-none focus:border-zomato-500"
                                />
                            </div>
                            <div className=" w-full flex flex-col gap-2">

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="password.."
                                    value={userData.password}
                                    name="password"
                                    onChange={handleChange}
                                    className="w-full border border-bcc-500 px-3 py-2 rounded-xl focus:outline-none focus:border-zomato-500"
                                />
                            </div>
                            <button
                                onClick={(e) => submit(e)}
                                className="w-full  text-center bg-bcc-500 text-white border border-gray-500  hover:bg-bcc-700 py-2 rounded-xl"
                            >
                                Sign Up
                            </button>
                            <button
                                onClick={(e) => googleLogin(e)}
                                className="py-2 justify-center   bg-bcc-500 text-white rounded-xl flex items-center gap-2 w-full border border-bcc-500  hover:bg-bcc-700"
                            >
                                <FcGoogle className="bg-transparent" />
                                SignUp With Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
