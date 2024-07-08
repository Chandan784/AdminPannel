import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./component/Category/Category.jsx";
import User from "./component/User/User.jsx";
import Home from "./component/Home/Home.jsx";
import CreateProduct from "./component/Product/CreateProduct.jsx";
import Product from "./component/Product/Product.jsx";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import AllProducts from "./component/Product/AllProducts.jsx";
import Promotion from "./component/Promotion/Promotion.jsx";
import LayoutDetails from "./component/Promotion/LayoutDetails.jsx";
import AllLayout from "./component/Promotion/AllLayout.jsx";
import CreateLayout from "./component/Promotion/CreateLayout.jsx";
import Course from "./component/Course/Course.jsx";
import AddCourse from "./component/Course/AddCourse.jsx";
import AddCourseSuject from "./component/Course/AddCourseSuject.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/promotion",
        element: <Promotion />,
      },

      {
        path: "/update-layout",
        element: <AllLayout />,
      },
      {
        path: "/layout-details",
        element: <LayoutDetails />,
      },
      {
        path: "/create-layout",
        element: <CreateLayout />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/add-course",
        element: <AddCourse />,
      },
      {
        path: "/add-course-subject",
        element: <AddCourseSuject />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
