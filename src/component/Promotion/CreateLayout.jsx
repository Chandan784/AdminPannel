import React, { useRef } from "react";
import { db } from "../../firebase/firebase";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  Timestamp,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { ref } from "firebase/storage";
import AllLayout from "./AllLayout";

function CreateLayout() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [layoutProducts, setLayoutProducts] = useState([]);

  let [layoutId, setLayoutId] = useState("");
  let [layoutTilte, setLayoutTitle] = useState("");
  let [layoutBg, setLayoutBg] = useState("");
  let [viewType, setViewType] = useState("");
  let [product, setProduct] = useState("");
  let [category, setCategory] = useState("");
  let [indexs, setIndexs] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]);

  let indexRef = useRef();

  let [colors, setColors] = useState([
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Purple", hex: "#800080" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Brown", hex: "#A52A2A" },
    { name: "Lime", hex: "#00FF00" },
    { name: "Gray", hex: "#808080" },
    { name: "Navy", hex: "#000080" },
    { name: "Teal", hex: "#008080" },
    { name: "Olive", hex: "#808000" },
    { name: "Maroon", hex: "#800000" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Gold", hex: "#FFD700" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Lavender", hex: "#E6E6FA" },
  ]);

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

    fetchCategories();
    fetchProducts();
  }, []);
  console.log(categories);
  const addData = async (e) => {
    e.preventDefault();
    try {
      // Data to add to the nested document hori1 in the promotion collection inside the java document
      // const  = {
      //     key1: "value1",
      //     key2: "value2"
      // };

      // Add data to the nested document hori1
      // await db
      //   .collection(category)
      //   .doc(product)
      //   .collection("PROMOTION")
      //   .doc(layoutId)
      //   .set({
      //     layout_title: layoutTilte,
      //     layout_background: layoutBg,
      //     products: ["prodId1"],
      //     view_type: Number(viewType),
      //   });

      const ref = doc(
        db,
        "CATEGORIES",
        category,
        "PROMOTION",
        layoutId.toString()
      );

      // Set data to the nested document hori1
      await setDoc(ref, {
        layout_title: layoutTilte,
        layout_background: layoutBg,
        products: layoutProducts,
        view_type: Number(viewType),
        index: indexRef.current.value,
      });

      alert("document uploaded sucessfully");
    } catch (error) {
      console.error("Error adding/updating document: ", error);
    }
  };

  function handelCrossBtn(value) {
    let newLayoutProducts = layoutProducts.filter((e) => {
      return value != e;
    });
    setLayoutProducts([...newLayoutProducts]);
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  function handelAddProduct(e) {
    setLayoutProducts([...layoutProducts, e.target.value]);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" w-full mt-32  flex justify-center flex-col items-center">
      <select
        name=""
        id=""
        className=" w-96 outline-1 outline-blue-500 border-2 border-blue-400  border-solid  rounded-md px-4 py-2 text-2xl text-center"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="">Select category</option>
        {categories.map((data) => {
          return (
            <option value={`${data.categoryName}`}>{data.categoryName}</option>
          );
        })}
      </select>

      <select
        name=""
        id=""
        className=" w-96 outline-1 outline-blue-500 border-2 border-blue-400  border-solid  rounded-md px-4 py-2 text-2xl text-center my-8"
        onChange={(e) => {
          setViewType(e.target.value);
        }}
      >
        <option value="">Select Layout Type</option>
        <option value="0">Banner</option>
        <option value="1">Horizonatal</option>
        <option value="2">Grid</option>
      </select>

      <form
        action=""
        className=" w-2/4 flex flex-col justify-center items-center"
      >
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter Layout id
        </label>
        <input
          type="text"
          name=""
          id=""
          value={layoutId}
          onChange={(e) => {
            setLayoutId(e.target.value);
          }}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter Layout title
        </label>
        <input
          type="text"
          name=""
          id=""
          value={layoutTilte}
          onChange={(e) => {
            setLayoutTitle(e.target.value);
          }}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Select layout background
        </label>
        <select
          type="text"
          name=""
          id=""
          value={layoutBg}
          onChange={(e) => {
            setLayoutBg(e.target.value);
          }}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        >
          <option value="">Select color</option>
          {colors.map((data) => {
            return <option value={`${data.hex}`}>{data.name}</option>;
          })}
        </select>

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Add product
        </label>
        <select
          type="text"
          name=""
          id=""
          value={product}
          onChange={handelAddProduct}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        >
          <option value="">Select product </option>

          {products.map((data) => {
            return <option value={`${data.id}`}>{data.id}</option>;
          })}
        </select>

        <div className="outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-4 h-56 flex  flex-wrap ">
          {layoutProducts.map((e) => {
            return (
              <span className=" rounded-md h-fit text-normal mx-2 px-2 py-1 border-2 border-blue-700 border-solid relative">
                {e}
                <RxCross2
                  onClick={() => {
                    handelCrossBtn(e);
                  }}
                  className=" absolute  -top-3 -right-3  text-xl text-white font-bold  bg-red-500 boreder-2 borde"
                />
              </span>
            );
          })}
        </div>
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Select index
        </label>
        <select
          type="text"
          name=""
          id=""
          ref={indexRef}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        >
          {indexs.map((data) => {
            return <option value={`${data}`}>{data}</option>;
          })}
        </select>
        <button
          value="Create Product"
          className="outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2 bg-blue-800 my-4 text-white text-2xl"
          onClick={addData}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateLayout;
