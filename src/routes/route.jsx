import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    }
  ]);

  export default router