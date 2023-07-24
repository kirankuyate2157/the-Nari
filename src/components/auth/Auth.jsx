import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { GoogleAuth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router";
import logo from "../nari.png";
import nariName from "../NariName.png";

export default function Login() {
  const navigate = useNavigate();
  const googleLogin = async (e) => {
    e.preventDefault();
    try {
      await GoogleAuth();
      alert("Login successful with Google!");
      // Redirect to the home page or desired URL after successful login
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className='flex flex-row w-full p-20  justify-center  align-middle'>
        <div className='inline-block w-full max-w-md md:p-6 md:my-8 overflow-hidden text-left align-middle transition-all transform  shadow-sm rounded-2xl'>
          <div className='flex flex-col w-full'>
            <div className='items-center  flex flex-col gap-3'>
              <div>
                <img src={logo} alt='nari logo' className='h-48' />
              </div>
            </div>
            <div className='mb-2  items-center  flex flex-col'>
              <div>
                <img src={nariName} alt='nari logo' className='h-12' />
              </div>
            </div>

            <form className='flex flex-col gap-3'>
              <Link to='/signin'>
                <div className='w-full  text-center bg-bcc-500 text-white border border-gray-500  hover:bg-bcc-700 py-2 rounded-xl'>
                  Sign In
                </div>
              </Link>
              <Link to='/signup'>
                <div className='w-full  text-center bg-bcc-500 text-white border border-gray-500  hover:bg-bcc-700 py-2 rounded-xl'>
                  Sign Up
                </div>
              </Link>
              <h1 className='w-full  text-center text-bcc-600 text-xl'>Or</h1>
              <button
                onClick={(e) => googleLogin(e)}
                className='py-2 justify-center   bg-bcc-500 text-white rounded-xl flex items-center gap-2 w-full border border-bcc-500  hover:bg-bcc-700'
              >
                <FcGoogle className='bg-transparent' />
                Login With Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
