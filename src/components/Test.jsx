import React, { useState } from 'react';
import Switch from 'react-js-switch';
import { TiTick } from "react-icons/ti";
const Test = () => {
    const [checked, setChecked] = useState(true);
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [enabled, setEnabled] = useState(false);
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };
    const handleChange = val => {
        setChecked(val)
    }
    return (
        <>
            <div className="bg-gray-800 p-20  w-3/6 min-h-screen">
                <div className=" bg-transparent mb-5 p-3 justify-center
                 bg-gray-700 flex rounded-xl ">
                    <h1 className="text-4xl p-2 bg-transparent  text-white ">
                        Decarbonise Options
                    </h1>
                </div>
                <div className="flex bg-gray-700 rounded-t-xl flex-row bg-transparent px-10 pt-1 justify-end">
                    <h1 className='p-1 text-sm bg-transparent text-white '>Select All  </h1>
                    <input type="checkbox" />
                </div>
                <div className="  h-96 bg-gray-700 rounded-b-xl" >

                    <div className=" bg-transparent  p-2 rounded-lg h-80  border-2 border-gray-600   rounded-b-xl mx-5">
                        <ul className=" flex flex-row bg-transparent   flex-wrap">
                            <li className=" p-2 m-3 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
                                Image Reduction <TiTick className="   bg-transparent ml-5   text-green-700 rounded-lg text-2xl" />
                            </li>
                            <li className="bg-gray-600  flex p-2 m-3 px-4 text-white rounded-2xl">
                                Transition Reduction

                                <label class="inline-flex bg-transparent ml-3 relative items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={enabled}
                                        readOnly

                                    />
                                    <div
                                        onClick={() => {
                                            setEnabled(!enabled);
                                        }}
                                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                    ></div>

                                </label>

                            </li>
                            <li className=" p-2 m-3 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle  px-4 rounded-2xl">
                                CSS Reduction
                                <div className="bg-transparent pl-5">
                                    <Switch value={checked} onChange={handleChange}

                                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"

                                    /></div>
                            </li>
                            <li className=" p-2 m-3 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
                                <TiTick className="   bg-transparent mr-3   text-green-700 rounded-lg text-2xl" /> Image Reduction
                            </li>
                            <li className="bg-gray-600 p-2 m-3 px-4 text-white rounded-2xl">

                                <input type="checkbox" className='mr-4' />JavaScript Reduction
                            </li>



                            <li className="bg-gray-600 p-2 m-3 px-4 text-white rounded-2xl">
                                Stop AutoPlaying Video
                            </li>
                            <li className="bg-gray-600 p-2 m-3 px-4 text-white rounded-2xl">
                                file Compression
                            </li>

                        </ul>
                    </div>
                    <div className=" h-16 flex flex-row flex-wrap justify-end bg-transparent rounded-b-xl    ">

                        <button className="bg-green-200 p-2 m-3 px-6 text-green-800 rounded-2xl">

                            Start
                        </button>
                        <button className="bg-yellow-200 p-2 m-3 px-6 text-yellow-800 rounded-2xl">

                            Preview
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test;
