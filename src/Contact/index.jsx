import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db, getUserData } from "./../services/firebaseConfig";

import Tips from "./Tips";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const user = getUserData().uid;
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addContactToFirestore(user, name, phoneNumber);
    setName("");
    setPhoneNumber("");
  };

  const addContactToFirestore = async (uid, name, phoneNumber) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, {
        uid,
        name,
        phoneNumber,
      });
      console.log("Contact added to Firestore!");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
    setIsOpen(false);
  };

  const handleCopyClick = (id) => {
    const textToCopy = document.getElementById(id).textContent;
    navigator.clipboard.writeText(textToCopy);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const q = query(contactsRef, where("uid", "==", user));
        const querySnapshot = await getDocs(q);
        const contactsData = querySnapshot.docs.map((doc) => doc.data());
        setContacts(contactsData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <>
      {/* Modal content */}
      {isOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 transition-opacity'
              aria-hidden='true'
            >
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            ></span>
            <div
              className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
            >
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor='input'
                      className='block text-gray-700 font-bold mb-2'
                    >
                      Name:
                    </label>
                    <input
                      type='text'
                      id='input'
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='input'
                      className='block text-gray-700 font-bold mb-2'
                    >
                      Number:
                    </label>
                    <input
                      type='text'
                      id='input'
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                  </div>
                  <div className='mt-4'>
                    <button
                      type='submit'
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className='ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className=' w-full flex justify-center'>
        <div className='flex  flex-col content-center'>
          <div className=' justify-center flex p-10 my-4'>
            <p className='text-3xl drop-shadow-3xl px-20 italic'>
              "The Security of Nation is Depends on both Men and Women And Any
              Society that Fails to Motivate Women is Not Modern"
            </p>
          </div>
          <div className=' container-fluid'>
            {showPopup && (
              <div className='text-green-500 shadow-2xl overflow-auto flex justify-center'>
                Text copied!
              </div>
            )}
            <div className=' flex flex-row justify-between mx-28 my-2 p-2 px-4 rounded-lg bg-slate-100  content-center shadow-xl '>
              <h1 className='bg-transparent'>Emergency</h1>
              <p
                id='number1'
                onClick={() => handleCopyClick("number1")}
                className='bg-transparent text-blue-500'
              >
                {" "}
                +91 44668 89944
              </p>
            </div>
            <div className=' flex flex-row justify-between mx-28 my-2 p-2 px-4 rounded-lg bg-slate-100  content-center shadow-xl '>
              <h1 className='bg-transparent'>Safety Helplines</h1>
              <p
                id='number2'
                onClick={() => handleCopyClick("number2")}
                className='bg-transparent text-blue-500'
              >
                {" "}
                112
              </p>
            </div>
            <div className=' flex flex-row justify-between mx-28 my-2 p-2 px-4 rounded-lg bg-slate-100  content-center shadow-xl '>
              <h1 className='bg-transparent'>Police</h1>
              <p
                id='number3'
                onClick={() => handleCopyClick("number3")}
                className='bg-transparent text-blue-500'
              >
                {" "}
                100
              </p>
            </div>
            <div className=' flex flex-row justify-between mx-28 my-2 p-2 px-4 rounded-lg bg-slate-100  content-center shadow-md '>
              <h1 className='bg-transparent'>Nearest Neighbour</h1>
              <p
                id='number4'
                onClick={() => handleCopyClick("number4")}
                className='bg-transparent text-blue-500'
              >
                +91 94455 55445
              </p>
            </div>
            <div>
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className='flex flex-row justify-between mx-28 my-2 p-2 px-4 rounded-lg bg-slate-100 content-center shadow-md'
                >
                  <h1 className='bg-transparent'>{contact.name}</h1>
                  <p
                    id={`number${index + 1}`}
                    onClick={() => handleCopyClick(`number${index + 1}`)}
                    className='bg-transparent text-blue-500'
                  >
                    {contact.phoneNumber}
                  </p>
                </div>
              ))}
            </div>

            <div className=' justify-center flex m-3'>
              <button
                className='bg-red-200  px-6 p-1 shadow-xl rounded-lg'
                onClick={() => setIsOpen(true)}
              >
                Add +
              </button>
            </div>
          </div>

          <div className=' flex justify-center text-3xl items-center bg-white '>
            <h1 className=' px-20 py-10 font-bold bg-white text-blue-900'>
              Essential Safety Tips Every Girl Should Be known to Proptect
              Yourself and stay safe.
            </h1>
            <img
              src='https://st.depositphotos.com/1041725/1619/v/600/depositphotos_16193531-stock-illustration-self-defense-illustration.jpg'
              alt='woman defense'
              className='h-80 pr-10 bg-white'
            />
          </div>
          {Tips.map((data, index) => (
            <div className='bg-transparent'>
              <div
                className='h-64 flex justify-center text-3xl items-center  bg-fixed bg-no-repeat bg-cover bg-center'
                style={{ backgroundImage: "url(" + data.img + ")" }}
              >
                <h1 className=' p-10 font-bold bg-transparent'>{data.title}</h1>
              </div>

              <div className='px-20 py-10 '>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
          <div>
            <div className=' px-20 flex justify-start  text-xl items-center '>
              <h1 className=' p-5 underline font-bold'>
                Safety Tips-Wrapping it up
              </h1>
            </div>

            <div className='px-20 pb-10'>
              <p className='mb-2'>
                {" "}
                At some point or the other ladies have to walk out of their
                safety zone, either for a job or for their loved ones. So being
                aware and alert are the only tools that can be their ultimate
                saviors. For the helpless bystanders, here is what you can do
              </p>
              <ul className='pl-5'>
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
  );
};
export default Contact;
