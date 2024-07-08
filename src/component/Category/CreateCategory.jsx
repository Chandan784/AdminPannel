import React from "react";
import { useState, useEffect } from "react";

function CreateCategory() {
  const [images, setImages] = useState([]);
  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };
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
    <div className="className=" w-full flex items-center justify-center mt-32>
      <form
        action=""
        className=" w-2/4 flex flex-col justify-center items-center"
      >
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter category name
        </label>
        <input
          type="text"
          name=""
          id=""
          ref={productId}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Select category image
        </label>
        <input
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
          type="file"
          onChange={handleFileChange}
        />

        <button
          value="Create Product"
          className="outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2 bg-blue-800 my-4 text-white text-2xl"
          onClick={handleUpload}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateCategory;
