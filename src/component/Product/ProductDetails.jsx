import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { db, storage } from "../../firebase/firebase";
import CircularProgress from "@mui/material/CircularProgress";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, setDoc, doc, average } from "firebase/firestore";

function ProductDetails() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  let data = useLocation();
  console.log(data);
  let [star_1, setStar_1] = useState(data.state["1_star"]);
  let [star_2, setStar_2] = useState(data.state["2_star"]);
  let [star_3, setStar_3] = useState(data.state["3_star"]);
  let [star_4, setStar_4] = useState(data.state["4_star"]);
  let [star_5, setStar_5] = useState(data.state["5_star"]);

  let [average_rating, setAverageRating] = useState(data.state.average_rating);
  let [total_ratings, setTotalRatings] = useState(data.state.total_ratings);

  let [title, setTitle] = useState(data.state.product_title);

  let [subtitle, setSubTitle] = useState(data.state.product_subtitle);
  let [description, setDescription] = useState(data.state.product_description);

  let [price, setPrice] = useState(data.state.product_price);

  let [cuttedPrice, setCuttedPrice] = useState(data.state.cutted_price);

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    const imageUrls = [];

    let productRef = doc(collection(db, "PRODUCTS"), data.state.id);
    await setDoc(productRef, {
      "1_star": Number(star_1),
      "2_star": Number(star_2),
      "3_star": Number(star_3),
      "4_star": Number(star_4),
      "5_star": Number(star_5),
      average_rating: average_rating,
      total_ratings: Number(total_ratings),
      product_title: title,
      product_subtitle: subtitle,
      product_description: description,
      product_price: price,
      cutted_price: cuttedPrice,
      product_images: data.state.product_images,
      product_type: data.state.product_type,
    });

    setUploading(false);
    alert("Product updated successfully!");
  };

  return (
    <div className=" w-full flex items-center justify-center mt-20">
      <form
        action=""
        className=" w-2/4 flex flex-col justify-center items-center"
      >
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          1 star
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setStar_1(e.target.value);
          }}
          value={star_1}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          2 star
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setStar_2(e.target.value);
          }}
          value={star_2}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          3 star
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setStar_3(e.target.value);
          }}
          value={star_3}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          4 star
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setStar_4(e.target.value);
          }}
          value={star_4}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          5 star
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setStar_5(e.target.value);
          }}
          value={star_5}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Average rating
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setAverageRating(e.target.value);
          }}
          value={average_rating}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Total ratings
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setTotalRatings(e.target.value);
          }}
          value={total_ratings}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter product title
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Product subtitle
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setSubTitle(e.target.value);
          }}
          value={subtitle}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Product descriptiom
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter price
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter cutted price
        </label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setCuttedPrice(e.target.value);
          }}
          value={cuttedPrice}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <button
          value="Create Product"
          className="outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2 bg-blue-800 my-4 text-white text-2xl"
          onClick={handleUpload}
        >
          Update product
        </button>
      </form>
    </div>
  );
}

export default ProductDetails;
