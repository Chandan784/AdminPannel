import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { db } from "./firebase/firebase";
import { collection, addDoc, Timestamp, setDoc, doc } from "firebase/firestore";
import Sidebar from "./component/sidebar/Sidebar";
import Navbar from "./component/Navbar/Navbar";
import Category from "./component/Category/Category";
import UserCard from "./component/User/UserCard";
import User from "./component/User/User";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  console.log(db);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "CATEGORIES", "Cat2"), {
        categoryName: "Cat2",
        icon: "khjhj",
        index: 9,
      });
      alert("Category added successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Navbar />
      <div className=" flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
