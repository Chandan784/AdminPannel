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
import CategoryCard from "./CategoryCard";

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "CATEGORIES"));
        const categoriesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesList);
        console.log(categories);
      } catch (e) {
        console.error("Error fetching documents: ", e);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" w-full grid grid-cols-2 mt-20 ml-20">
      {categories.map((data) => {
        return <CategoryCard data={data} />;
      })}
    </div>
  );
}

export default Category;
