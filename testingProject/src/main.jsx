import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./Pages/AddProduct/AddProduct.jsx";
import Basket from "./Pages/Basket/Basket.jsx";
import Home from "./Pages/Home/Home.jsx";
import Detail from "././Pages/Detail/Detail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "detail/:productId",
        element: <Detail />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
