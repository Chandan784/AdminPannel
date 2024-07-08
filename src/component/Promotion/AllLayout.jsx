import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { RxCross2 } from "react-icons/rx";

import {
  collection,
  addDoc,
  Timestamp,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";
function AllLayout() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  let [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "CATEGORIES"));
        const categoriesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesList);
      } catch (e) {
        console.error("Error fetching documents: ", e);
      } finally {
        setLoading(false);
      }
    };
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "CATEGORIES", category, "PROMOTION")
        );
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
        console.log(products);
      } catch (e) {
        console.error("Error fetching documents: ", e);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
    fetchProducts();
  }, [category]);

  let navigate = useNavigate();
  function handelOnClickLayout(data) {
    console.log(data);
    navigate("/layout-details", { state: { ...data, category } });
  }
  return (
    <div className=" w-full mt-32  flex justify-center flex-col items-center">
      <select
        name=""
        id=""
        className=" w-96 outline-1 outline-blue-500 border-2 border-blue-400  border-solid  rounded-md px-4 py-2 text-2xl text-center"
        onChange={(e) => {
          setCategory(e.target.value);
          setProducts(products);
        }}
      >
        <option value="">Select category</option>
        {categories.map((data) => {
          return (
            <option value={`${data.categoryName}`}>{data.categoryName}</option>
          );
        })}
      </select>

      {products.map((e) => {
        return (
          <div
            className=" px-4 py-2 my-2 rounded-md w-1/3 text-center border-2 border-blue-300 border-solid bg-blue-700 text-white"
            onClick={() => {
              handelOnClickLayout(e);
            }}
          >
            <h1 className=" text-xl  ">{e.id}</h1>
          </div>
        );
        // } else if (e.view_type == 1) {
        //   return <div>
        //      <h1>{e.layout_title}</h1>
        //   </div>;
        // }
      })}
    </div>
  );
}

export default AllLayout;
