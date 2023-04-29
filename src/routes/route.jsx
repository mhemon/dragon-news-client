import React from "react";
import {Navigate, createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Home/Login/Login/Login";
import Register from "../pages/Home/Home/Register/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermAndCondition from "../pages/Shared/Term/TermAndCondition";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'terms',
        element: <TermAndCondition/>
      }
    ]
  },
    {
      path: "/category",
      element: <Main/>,
      children: [
        {
          path: ':id',
          element: <Category/>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        }
      ]
    },
    {
      path: "/news",
      element: <NewsLayout/>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router