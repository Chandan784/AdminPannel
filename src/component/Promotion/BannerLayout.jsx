import React from "react";

function BannerLayout() {
  return (
    <div>
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

export default BannerLayout;
