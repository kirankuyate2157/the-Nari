import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from "react-router";
import Contact from "../../Contact";
import { getUserData, logout } from "../../services/firebaseConfig.js";
import Maps from "../Maps";
import Mymap from "../Maps/Mymap";
import Navbar from "../Navbar";

const UnIdentified = () => {
  return (
    <>
      <div className='w-full flex justify-center p-20'>
        <div className='flex-col justify-center items-center '>
          <img
            src='https://www.read.org.np/img/coming-soon.gif'
            alt='under dev'
          />
          <p className='flex  justify-center text-3xl'>
            page under the development !
          </p>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [activeTab, setActiveTab] = useState("map");
  const endSession = () => {
    const log = logout();
    if (log) {
      alert("LogOut successfully !");
      navigate("/signin");
    }
  };
  const Tabs = () => {
    if (activeTab === "map") {
      return <Maps />;
    } else if (activeTab === "alert") {
      return <Mymap />;
    } else if (activeTab === "contact") {
      return <Contact />;
    } else if (activeTab === "profile") {
      return <UnIdentified />;
    } else {
      return <Maps />;
    }
  };

  return (
    <>
      <Navbar />
      <div className=' flex md:flex-row flex-col '>
        <aside
          style={{ height: "fit-content" }}
          className='hidden md:flex w-1/6  sticky   top-2 bg-bcc-400 min-h-screen justify-center shadow-xl  flex-col  gap-4'
        >
          <div className='flex  flex-row w-full bg-transparent  text-white pt-3 pl-5   pb-2'>
            <ol className=' flex flex-col w-full pl-5 font-bold    bg-transparent text-sm justify-between '>
              <li
                className={`  w-full pl-5 bg-transparent hover:bg-bcc-800 ${
                  activeTab === "map"
                    ? "bg-bcc-800 text-red-800"
                    : "bg-transparent"
                } text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl`}
                onClick={() => {
                  setActiveTab("map");
                }}
              >
                Map
              </li>
              <li
                className={`  w-full pl-5 bg-transparent hover:bg-bcc-800 ${
                  activeTab === "alert"
                    ? "bg-bcc-800 text-red-800"
                    : "bg-transparent"
                } text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl`}
                onClick={() => {
                  setActiveTab("alert");
                }}
              >
                Alert
              </li>
              <li
                className={`  w-full pl-5 bg-transparent hover:bg-bcc-800 ${
                  activeTab === "contact"
                    ? "bg-bcc-800 text-red-800"
                    : "bg-transparent"
                } text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl`}
                onClick={() => {
                  setActiveTab("contact");
                }}
              >
                Contact
              </li>
              <li
                className={`  w-full pl-5 bg-transparent hover:bg-bcc-800 ${
                  activeTab === "profile"
                    ? "bg-bcc-800 text-red-800"
                    : "bg-transparent"
                } text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl`}
                onClick={() => {
                  setActiveTab("profile");
                }}
              >
                Profile
              </li>
              <li
                className='  w-full pl-5 bg-transparent hover:bg-bcc-800 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl'
                onClick={() => endSession()}
              >
                Log Out
              </li>
            </ol>
          </div>
        </aside>
        <Tabs />
      </div>
    </>
  );
};

export default Home;
