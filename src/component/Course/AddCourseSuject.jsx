import React from "react";
import { db } from "../../firebase/firebase";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  Timestamp,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";
function AddCourseSuject() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "PURCHASEDCOURSES"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
        console.log(products, "courses");
      } catch (e) {
        console.error("Error fetching documents: ", e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products, "courses");
  return (
    <div className="w-full flex justify-center items-center h-fit mt-20">
      <form action="">
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          slect course
        </label>
        <select
          type="text"
          name=""
          id=""
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        >
          {products.map((e) => {
            return <option>{e.id}</option>;
          })}
        </select>
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Add syllabus
        </label>
        <input
          type="text"
          name=""
          id=""
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2 "
        />
        <button className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2 bg-blue-800  text-white ">
          Add syllabus
        </button>
      </form>
    </div>
  );
}

export default AddCourseSuject;
