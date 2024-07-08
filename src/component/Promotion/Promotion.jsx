import React from "react";

import { useState, useEffect } from "react";

import { FaEdit, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Promotion() {
  let navigate = useNavigate();
  function handelUpdateLayout() {
    navigate("/update-layout");
  }

  function handelCreateLayout() {
    navigate("/create-layout");
  }
  return (
    <div className=" w-full  mt-20 flex flex-col justify-center items-center  h-screen">
      <div
        className="  w-2/5 h-fit px-8 py-4 bg-red-600 text-center "
        onClick={handelUpdateLayout}
      >
        <FaUserAlt className="text-2xl font-semibold my-2 text-white text-center w-full" />
        <h1 className=" text-2xl font-semibold my-2 text-white ">
          Update Layout
        </h1>
      </div>

      <div
        className=" w-2/5 h-fit px-8 py-4 bg-red-600 my-4 text-center"
        onClick={handelCreateLayout}
      >
        <FaEdit className="text-2xl font-semibold my-2 text-white w-full text-center " />
        <h1 className=" text-2xl font-semibold my-2 text-white">
          Create Layout
        </h1>
      </div>
    </div>
  );
}

export default Promotion;
