import React from 'react'
import Tips from './Tips';

const Contact = () => {
    return (
        <>
            <div className=" w-full flex justify-center">
                <div className="flex  flex-col content-center">
                    <div className=' justify-center flex p-10 my-4'>
                        <p className='text-3xl drop-shadow-3xl px-20 italic'>"The Security of Nation is Depends on both Men and Women And  Any Society that Fails to Motivate Women is Not Modern"</p></div>
                    <div className=" container-fluid">
                        <div className=" flex flex-row justify-between mx-28 my-2 p-2 px-4 rounded-lg bg-slate-100  content-center shadow-xl ">
                            <h1 className="bg-transparent">Emergency</h1>
                            <p className="bg-transparent text-blue-500"> +91 44668 89944</p>
                        </div>
                        <div className=" flex flex-row justify-between mx-28 my-2 p-2 px-4 rounded-lg bg-slate-100  content-center shadow-xl ">
                            <h1 className="bg-transparent">Safety Helplines</h1>
                            <p className="bg-transparent text-blue-500">  112</p>
                        </div><div className=" flex flex-row justify-between mx-28  my-2 p-2 rounded-lg bg-slate-100 content-center shadow-xl">
                            <h1>Police</h1>
                            <p> 100</p>
                        </div><div className=" flex flex-row justify-between mx-28 my-2 p-2 rounded-lg bg-slate-100 content-center shadow-xl ">
                            <h1>Nearest Neighbour</h1>
                            <p> +91 94455 55445</p>
                        </div>
                        <div className=" justify-center flex m-3">
                            <button className="bg-red-200  px-6 p-1 shadow-xl rounded-lg">Add +</button>
                        </div>
                    </div>

                    <div className=" flex justify-center text-3xl items-center ">
                        <h1 className=" px-20 py-10 font-bold">Essential Safety Tips Every Girl Should Be known to Proptect Yourself and stay safe.</h1>

                    </div>
                    {Tips.map((data) => (
                        < div className='bg-transparent'>
                            <div className="h-64 flex justify-center text-3xl items-center bg-img2 bg-fixed bg-no-repeat bg-cover bg-center">
                                <h1 className=" p-10 font-bold">{data.title}</h1>

                            </div>

                            <div className="px-20 py-10 ">
                                <p>{data.desc}</p>
                            </div>

                        </div>
                    ))}
                    < div >
                        <div className=" flex justify-center text-xl items-center ">
                            <h1 className=" p-10 font-bold">Safety Tips-Wrapping it up</h1>

                        </div>

                        <div className="px-20 py-10">
                            <p className="my-2">  At some point or the other ladies have to walk out of their safety zone, either for a job or for their loved ones.
                                So being aware and alert are the only tools that can be their ultimate saviors.
                                For the helpless bystanders, here is what you can do</p>
                            <ul className="pl-5">

                                <li>- Call for help immediately. </li>
                                <li>- Distract them with a police signal from your mobile.</li>
                                <li>- Raise your voice.</li>
                                <li>- Gather the crowd.</li>
                                <li>- Stand by her!!!</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Contact;




