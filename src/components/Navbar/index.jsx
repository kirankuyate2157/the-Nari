import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai';
import { RiSearch2Line } from 'react-icons/ri';
import { BiCurrentLocation, BiMenu } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import Home from '../Home';
import logo from "../nari.png";
import nariName from "../NariName.png";
function Navbar() {
    return (
        <>
            <div className="md:px-20 px-6 flex flex-row   shadow-xl justify-between">
                <div className=" flex items-center    align-center">

                    <div className="  items-center flex  flex-row justify-center bg-transparent   gap-3 ">
                        <div>
                            <img src={logo} alt="nari logo"
                                className="h-12 md:h-14 " />
                        </div>
                        <div>
                            <img src={nariName} alt="nari logo"
                                className="h-8"
                            />
                        </div>

                    </div>
                </div>

                <div className=" flex items-center  flex-row justify-end gap-5  w-full">
                    <div className=" w-2/3 inline-block  shadow p-2  items-center gap-3  border border-gray-200 rounded-xl">

                        <div className="flex w-full items-center gap-2">
                            <RiSearch2Line />
                            <input
                                type="search"
                                placeholder="Search for restaurant, cuisine or a dish"
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <div> <span className="w-full md:hidden "><BiMenu className='bg-transparent w-full text-lg  ' /></span></div>
                    <div className=" flex items-center flex-col justify-center align-middle   ">
                        <ul className=" flex items-center flex-row gap-3 justify-evenly w-full ">
                            <li className="w-full text-red-600 "><BiCurrentLocation className='bg-transparent w-full text-2xl  ' /></li>
                            <li className="w-full "><AiOutlineSetting className='bg-transparent w-full text-2xl ' /></li>
                            <li className="w-full  "><IoMdNotificationsOutline className='bg-transparent w-full text-2xl ' /></li>
                            <li className="w-full  mx-2"><CgProfile className='bg-transparent w-full text-4xl ' /></li>
                        </ul>
                    </div>

                </div>
            </div >
            <Home />

        </>

    )
}

export default Navbar;