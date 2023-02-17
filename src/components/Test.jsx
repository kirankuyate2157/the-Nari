// import React, { useState } from 'react';
// import Switch from 'react-js-switch';
// import { TiTick } from "react-icons/ti";
// const Test = () => {
//     const [checked, setChecked] = useState(true);
//     const [checkedOne, setCheckedOne] = React.useState(false);
//     const [enabled, setEnabled] = useState(false);
//     const handleChangeOne = () => {
//         setCheckedOne(!checkedOne);
//     };
//     const handleChange = val => {
//         setChecked(val)
//     }
//     return (
//         <>
//             <div className="bg-gray-800 p-20  w-3/6 min-h-screen">
//                 <div className=" bg-transparent mb-5 p-3 justify-center
//                  bg-gray-700 flex rounded-xl ">
//                     <h1 className="text-4xl p-2 bg-transparent  text-white ">
//                         Decarbonise Options
//                     </h1>
//                 </div>
//                 <div className="container-box-select">
//                     <h1 className='p-1 text-sm bg-transparent text-white '>Select All  </h1>
//                     <input type="checkbox" />
//                 </div>
//                 <div className="  h-96 bg-gray-700 rounded-b-xl" >

//                     <div className="decabonation-options">
//                         <ul className=" ">
//                             <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                              <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>
//                             <li className="">
//                                 <button class=" p-2 shadow-xl m-0.5 bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  align-center px-4 rounded-2xl">

//                                     Transition Reduction
//                                     <TiTick className="tike" />
//                                 </button>
//                             </li><li className="">
//                                 <button class=" p-2 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">

//                                     CSS Reduction
//                                     <TiTick className="tike" />
//                                 </button>
//                             </li><li className="">
//                                 <button class=" p-2 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">

//                                     Image Reduction
//                                     <TiTick className="tike" />
//                                 </button>
//                             </li><li className=""> <button class=" p-2 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">

//                                 JavaScript Reduction
//                                 <TiTick className="tike" />
//                             </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>                            <li className="">

//                                 <button class=" p-2 m-1 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">
//                                     Image Reduction <TiTick className="tike text-2xl ml-2" />
//                                 </button>
//                             </li>
//                             <li className=""> <button class=" p-2 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">

//                                 JavaScript Reduction
//                                 <TiTick className="tike" />
//                             </button>
//                             </li>
//                             <li className="">
//                                 <button class=" p-2 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">

//                                     Stop AutoPlaying Video
//                                     <TiTick className="tike" />
//                                 </button>
//                             </li><li className=""> <button class=" p-2 shadow-xl bg-gcc-50 text-green-900  border-lime-500 border flex justify-between  content-middle px-4 rounded-2xl">

//                                 file Compression
//                                 <TiTick className="tike" />
//                             </button>
//                             </li>


//                         </ul>
//                     </div>
//                     <div className="decabonation-btn-box  ">

//                         <button className="decabonation-btn-start">

//                             Start
//                         </button>
//                         <button className="decabonation-btn-preview">

//                             Preview
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Test;
