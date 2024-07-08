import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ data }) {
  let navigate = useNavigate();

  function handelProductOnClick() {
    navigate("/product-details", { state: data });
  }

  return (
    <div>
      <button
        className=" bg-orange-800 text-white px-2 py-2 w-full my-2 rounded-md text-2xl"
        onClick={handelProductOnClick}
      >
        {data.id}
      </button>
    </div>
  );
}

export default ProductCard;
