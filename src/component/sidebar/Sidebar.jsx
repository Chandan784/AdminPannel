import React, { useState } from "react";
import { MdCategory, MdOndemandVideo, MdQuiz } from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";

function Sidebar() {
  let [option, setOption] = useState("hidden");
  return (
    <div className=" w-fit mt-20 bg-gray-800  h-screen  fixed  ">
      <Link
        to="/"
        className=" bg-gray-800 flex  justify-arround items-center py-4 text-white text-2xl  px-8 gap-4 hover:bg-blue-800"
      >
        <MdQuiz className=" text-white mx-2" />
        <h1 className=" text-left">Home</h1>
      </Link>
      <Link
        to="/product"
        className=" bg-gray-800 flex  justify-arround items-center py-4 text-white text-2xl  px-8 gap-4 hover:bg-blue-800"
      >
        <MdQuiz className=" text-white mx-2" />
        <h1 className=" text-left">Product</h1>
      </Link>

      <Link
        to="/promotion"
        className=" bg-gray-800 flex  justify-arround items-center py-4 text-white text-2xl  px-8 gap-4 hover:bg-blue-700"
      >
        <MdQuiz className=" text-white mx-2" />
        <h1 className=" text-left">Promotion</h1>
      </Link>
      <Link className=" bg-gray-800 flex  justify-arround items-center py-4 text-white text-2xl  gap-4 px-8 hover:bg-blue-700">
        <FaUserAlt className=" text-white mx-2" />
        <h1 className=" text-left">User</h1>
      </Link>

      <Link
        to="/category"
        className=" bg-gray-800 flex  justify-around items-center py-4 text-white text-2xl  px-8 gap-4 hover:bg-blue-700"
      >
        <TbCategory className=" text-white mx-2" />
        <h1 className=" text-left">Category</h1>
      </Link>
      <Link
        to="/course"
        className=" bg-gray-800 flex  justify-arround items-center py-4 text-white text-2xl  px-8 gap-4 hover:bg-blue-700"
      >
        <MdOndemandVideo className=" text-white mx-2" />
        <h1 className=" text-left"> Course</h1>
      </Link>
      <Link className=" bg-gray-800 flex  justify-arround items-center py-4 text-white text-2xl  px-8 gap-4 hover:bg-blue-700">
        <MdQuiz className=" text-white mx-2" />
        <h1 className=" text-left">Quiz</h1>
      </Link>
      <Link className=" bg-gray-800 flex  justify-arround items-center py-4 text-white text-2xl  gap-4 px-8 hover:bg-blue-700">
        <FaUserAlt className=" text-white mx-2" />
        <h1 className=" text-left">User</h1>
      </Link>

      <Link className=" bg-gray-800 flex  justify-around items-center py-4 text-white text-2xl  px-8 gap-4">
        <TbCategory className=" text-white mx-2" />
        <h1 className=" text-left">Storage</h1>
      </Link>
    </div>
  );
}

export default Sidebar;
