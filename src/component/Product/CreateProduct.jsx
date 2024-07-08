import React, { useRef } from "react";
import { db, storage } from "../../firebase/firebase";
import CircularProgress from "@mui/material/CircularProgress";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, setDoc, doc, average } from "firebase/firestore";
import { useState } from "react";
function CreateProduct() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  let productId = useRef();
  let titleRef = useRef();
  let subtitleRef = useRef();
  let descriptionRef = useRef();
  let productPrice = useRef();
  let productCuttedPrice = useRef();
  let productType = useRef();

  let [product_type, setProductType] = useState(0);

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  async function addCourseWithSubjects(courseId, subjectList) {
    const courseRef = doc(db, "PURCHASEDCOURSES", courseId);

    // Step 1: Add the course document with the subject list
    await setDoc(courseRef, {
      subject_list: subjectList,
    });
    if (subjectList.length == 0) {
      return;
    }
    // Step 2: Add subcollections for each subject
    for (const subject of subjectList) {
      const subjectRef = doc(courseRef, subject, "lectures");

      await setDoc(subjectRef, {
        title_list: [],
        url_list: [],
      });

      const subjectRef1 = doc(courseRef, subject, "notes");
      await setDoc(subjectRef1, {
        title_list: [],
        url_list: [],
      });

      const subjectRef2 = doc(courseRef, subject, "tests");
      await setDoc(subjectRef2, {
        title_list: [],
        url_list: [],
      });

      // Adding documents for lecture, notes, and tests
      //   await setDoc(doc(subjectRef, "l"), {
      //     /* Your lecture data here */
      //     note: "test",
      //   });
      //   await setDoc(doc(subjectRef, "n"), {
      //     /* Your notes data here */
      //     note: "test",
      //   });
      //   await setDoc(doc(subjectRef, "t"), {
      //     /* Your tests data here */
      //     note: "test",
      //   });
    }

    console.log(`Course ${courseId} with subjects added successfully.`);
  }

  // // Usage
  // const courseId = "CodingCourse";
  // const subjectList = ["JAVA", "C++", "PYTHON"];

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    const imageUrls = [];

    for (const image of images) {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      imageUrls.push(url);
    }

    let productRef = doc(collection(db, "PRODUCTS"), productId.current.value);
    await setDoc(productRef, {
      "1_star": 0,
      "2_star": 0,
      "3_star": 0,
      "4_star": 0,
      "5_star": 0,
      average_rating: "0",
      total_ratings: 0,
      product_title: titleRef.current.value,
      product_subtitle: subtitleRef.current.value,
      product_price: Number(productPrice.current.value),
      cutted_price: Number(productCuttedPrice.current.value),
      product_images: imageUrls,
      product_type: Number(product_type),
    });

    if (product_type == "1") {
      addCourseWithSubjects(productId.current.value, [])
        .then(() => console.log("Data added successfully."))
        .catch((error) => console.error("Error adding data: ", error));
    }
    setUploading(false);
    alert("Images uploaded successfully!");
  };

  return (
    <div className=" w-full flex items-center justify-center  mt-32">
      {uploading ? (
        <CircularProgress className=" absolute left-2/4 " size={100} />
      ) : null}
      <form
        action=""
        className=" w-2/4 flex flex-col justify-center items-center"
      >
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter product id name
        </label>
        <input
          type="text"
          name=""
          id=""
          ref={productId}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter title
        </label>
        <input
          type="text"
          name=""
          id=""
          ref={titleRef}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter subtitle
        </label>
        <input
          type="text"
          name=""
          id=""
          ref={subtitleRef}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter description
        </label>
        <input
          type="text"
          name=""
          ref={descriptionRef}
          id=""
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter price
        </label>
        <input
          type="text"
          name=""
          id=""
          ref={productPrice}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />
        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Enter cutted price
        </label>
        <input
          type="text"
          name=""
          id=""
          ref={productCuttedPrice}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Select product images
        </label>
        <input
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
          type="file"
          multiple
          onChange={handleFileChange}
        />

        <label htmlFor="" className=" font-medium float-left w-full text-xl ">
          Product type
        </label>
        <select
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setProductType(e.target.value);
          }}
          value={productType}
          className=" outline-1 outline-blue-500 border-2 border-blue-400  border-solid w-full rounded-md px-4 py-2"
        >
          <option value="">Select product type</option>
          <option value="1">Course</option>
          <option value="2">Notes</option>
          <option value="3">Test</option>
        </select>
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

export default CreateProduct;
