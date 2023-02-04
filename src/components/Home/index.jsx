import React, { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router';
import { getUserData, logout } from '../../services/appwriteConfig';
import Navbar from '../Navbar';

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    useEffect(() => {
        getUserData()
            .then((account) => setUser(account))
            .catch((error) => navigate('/signin'))
    })

    const endSession = () => {
        const log = logout();
        if (log) {
            alert('LogOut successfully !');
            navigate('/signin')
        }

    }

    return (
        <>
            <Navbar />
            <div className=" flex md:flex-row flex-col justify-between ">
                <aside


                    style={{ height: "fit-content" }}
                    className="hidden md:flex w-1/6  sticky   top-2 bg-bcc-400 min-h-screen justify-center shadow-xl  flex-col  gap-4"
                >
                    <div className="flex  flex-row w-full bg-transparent  max-h-screen  text-white pt-3 pl-5   pb-2">
                        <ol className=" flex flex-col w-full pl-5 font-bold    bg-transparent text-sm justify-between ">
                            <li className="  w-full pl-5 bg-transparent hover:bg-bcc-800  text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" >Map</li>
                            <li className="  w-full pl-5 bg-transparent hover:bg-bcc-800 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" >Alert</li>
                            <li className="  w-full pl-5 bg-transparent hover:bg-bcc-800 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" >Contact</li>
                            <li className="  w-full pl-5 bg-transparent hover:bg-bcc-800 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" >Profile</li>
                            <li className="  w-full pl-5 bg-transparent hover:bg-bcc-800 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => endSession()}  >Log Out</li>


                        </ol>
                    </div>
                </aside>

                <Scrollbars className="md:hidden bg-transparent" >
                    <div className="md:hidden  bg-transparent bg-bcc-400 sticky">
                        <ol className=" flex  w-full pl-5 font-semibold  text-md  md:justify-between ">
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl"  >Early Life</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl"  >Career</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl"  >Musical Style</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl"  >Personal Life</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl"  >New Worth</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl"  >Controversy</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl"  >Awards</li>
                            <button className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl"  >Facts</button>

                        </ol>
                    </div>
                </Scrollbars>

            </div>
        </>
    )
}

export default Home;