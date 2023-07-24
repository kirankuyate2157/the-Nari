import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, getUserData } from "./../../services/firebaseConfig.js";
import React, { useEffect, useState } from "react";

const AddContact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming you have the 'user' ID from somewhere (e.g., authentication).
    const user = getUserData().uid;
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
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const querySnapshot = await getDocs(contactsRef);
        const contactsData = querySnapshot.docs.map((doc) => doc.data());
        setContacts(contactsData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className='max-w-md mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Add Contact</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* ... (rest of the form) ... */}
      </form>
      <h2 className='text-2xl font-bold mt-6 mb-4'>Contact List</h2>
      {contacts.length > 0 ? (
        <ul className='space-y-2'>
          {contacts.map((contact, index) => (
            <li key={index} className='bg-white px-4 py-3 shadow-sm rounded-md'>
              <span className='font-bold'>{contact.name}</span>
              <span className='text-gray-600'>{contact.phoneNumber}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts added yet.</p>
      )}
    </div>
  );
};

export default AddContact;
