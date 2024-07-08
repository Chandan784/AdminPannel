import React from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
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

function LayoutDetails() {
  let { state } = useLocation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [layoutProducts, setLayoutProducts] = useState(state.products);

  let [layoutId, setLayoutId] = useState(state.id);
  let [layoutTilte, setLayoutTitle] = useState(state.layout_title);
  let [layoutBg, setLayoutBg] = useState(state.layout_background);
  let [viewType, setViewType] = useState(state.view_type);
  let [product, setProduct] = useState(state.products);
  let [category, setCategory] = useState(state.category);
  let [indexs, setIndexs] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]);

  let indexRef = useRef();

  let [colors, setColors] = useState([
    { name: "White", hex: "#FFFFFF" },
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

  const addData = async (e) => {
    console.log(layoutId);
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
      console.log(layoutId);
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
        index: Number(indexRef.current.value),
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

  function handelAddProduct(e) {
    setLayoutProducts([...layoutProducts, e.target.value]);
  }

  console.log(state, "state");
  if (state.view_type == 0) {
    return (
      <div className=" w-full mt-20 ml-40 text-center ">
        <button className=" text-white bg-red-600 rounded-md px-4 py-2 mt-8">
          Delete Layout
        </button>
        <div className="flex flex-col items-center">
          {state.banner_list.map((e) => {
            return <img className=" w-1/3 mt-4" src={e} alt="" />;
          })}
        </div>
      </div>
    );
  } else if (state.view_type == 1) {
    return (
      <div className=" w-full mt-20 ml-40 text-center flex justify-center ">
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
            disabled
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
            value={state.index}
            ref={indexRef}
            className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
          >
            <option value="">Select index</option>
            {indexs.map((data) => {
              return <option value={`${data}`}>{data}</option>;
            })}
          </select>
          <button
            value="Create Product"
            className="outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2 bg-blue-800 my-4 text-white text-2xl"
            onClick={addData}
          >
            Update Layout
          </button>
        </form>
      </div>
    );
  }
}

export default LayoutDetails;
