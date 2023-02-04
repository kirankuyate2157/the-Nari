import React from "react";
import { TiTick } from "react-icons/ti";
const Test = () => {
    return (
        <>
            <div className="bg-gray-800 p-20  w-1/2 min-h-screen">
                <div className=" bg-transparent p-3 justify-center
                 bg-gray-700 flex rounded-xl">
                    <h1 className="text-4xl p-2 bg-transparent  text-white ">
                        Decarbonise Options
                    </h1>
                </div>
                <div className=" mt-5 h-96  bg-gray-700 rounded-t-xl">
                    <ul className=" flex flex-row col bg-transparent  p-4 flex-wrap">
                        <li className=" p-2 m-3 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
                            Image Reduction <TiTick className="   bg-transparent ml-5   text-green-700 rounded-lg text-2xl" />
                        </li>
                        <li className="bg-gray-600 shadow-xl p-2 m-3 px-4 text-white rounded-2xl">
                            CSS Reduction
                        </li>

                        <li className="bg-gray-600 p-2 m-3 px-4 text-white rounded-2xl">
                            JavaScript Reduction
                        </li>

                        <li className="bg-gray-600 p-2 m-3 px-4 text-white rounded-2xl">
                            Transition Reduction
                        </li>

                        <li className="bg-gray-600 p-2 m-3 px-4 text-white rounded-2xl">
                            Stop AutoPlaying Video
                        </li>
                        <li className="bg-gray-600 p-2 m-3 px-4 text-white rounded-2xl">
                            file Compression
                        </li>

                    </ul>
                </div>
                <div className=" h-20 flex flex-row flex-wrap justify-end bg-gray-700 rounded-b-xl p-2  ">

                    <button className="bg-green-200 p-2 m-3 px-6 text-green-800 rounded-2xl">

                        Start
                    </button>
                    <button className="bg-yellow-200 p-2 m-3 px-6 text-yellow-800 rounded-2xl">

                        Preview
                    </button>
                </div>
            </div>
        </>
    );
};

export default Test;
