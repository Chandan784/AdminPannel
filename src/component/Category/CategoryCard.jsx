import React from "react";

function CategoryCard({ data }) {
  return (
    <div className=" flex justify-center items-center h-fit">
      <img className=" h-28" src={data.icon} alt="" />
      <h1>{data.categoryName}</h1>
    </div>
  );
}

export default CategoryCard;
