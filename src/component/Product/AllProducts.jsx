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
import ProductCard from "./ProductCard";
function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "PRODUCTS"));
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

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" w-full gap-4 grid grid-cols-3 mx-4 z-10 ml-60 mt-20">
      {products.map((data) => {
        return <ProductCard data={data} />;
      })}
    </div>
  );
}

export default AllProducts;
